'use server'

import {
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3'
import { s3 } from '@/lib/s3client'
import { revalidatePath } from 'next/cache'

interface UploadImageFormState {
  success?: boolean
  message: string
}

export async function uploadImage(
  formData: FormData,
): Promise<UploadImageFormState> {
  const image = formData.get('image') as File

  if (!image.size) {
    return {
      success: false,
      message: 'Nenhuma imagem selecionada',
    }
  }

  if (!image.type.startsWith('image/')) {
    return {
      success: false,
      message: 'Formato de arquivo inválido',
    }
  }

  if (image.size > 2 * 1024 * 1024) {
    return {
      success: false,
      message: 'A imagem ultrapassa o limite de 2mb',
    }
  }

  const bucketCount = await getBucketCount()

  if (bucketCount >= 20) {
    return {
      success: false,
      message:
        'Não é possível adicionar mais imagens. Por favor, exclua alguma imagem para continuar.',
    }
  }

  try {
    const arrayBuffer = await image.arrayBuffer()
    const imageBuffer = Buffer.from(arrayBuffer)

    const putObjectParams = new PutObjectCommand({
      Bucket: 'mp-codante-foto-upload',
      Key: image.name,
      Body: imageBuffer,
      ContentType: 'image/jpeg',
    })
    await s3.send(putObjectParams)
  } catch (err) {
    return {
      success: false,
      message: 'Falha ao fazer upload da imagem.',
    }
  }

  revalidatePath('/')
  return { success: true, message: 'Imagem enviada com sucesso!' }
}

export async function deleteImage(imageKey: string) {
  try {
    const deleteObjectParams = new DeleteObjectCommand({
      Bucket: 'mp-codante-foto-upload',
      Key: imageKey,
    })

    await s3.send(deleteObjectParams)
  } catch (err) {
    return false
  }

  revalidatePath('/')
  return true
}

async function getBucketCount() {
  const listObjectsParams = new ListObjectsV2Command({
    Bucket: 'mp-codante-foto-upload',
  })

  const objects = await s3.send(listObjectsParams)

  return objects.Contents?.length ?? 0
}
