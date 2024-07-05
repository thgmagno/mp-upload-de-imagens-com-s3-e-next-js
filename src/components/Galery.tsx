import Image from 'next/image'
import { ListObjectsV2Command } from '@aws-sdk/client-s3'
import { s3 } from '@/lib/s3client'
import { ButtonDeleteImage } from './ButtonDeleteImage'

export async function Galery() {
  const objectListParams = new ListObjectsV2Command({
    Bucket: 'mp-codante-foto-upload',
  })

  const objectList = await s3.send(objectListParams)

  const imageList = objectList.Contents?.sort(
    (a, b) =>
      Number(b.LastModified?.getTime()) - Number(a.LastModified?.getTime()),
  ).map((obj) => ({
    id: obj.ETag as string,
    key: obj.Key as string,
  }))

  return (
    <>
      <h2 className="my-4 text-2xl font-bold text-slate-600">
        Galeria de fotos
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {imageList?.map((image) => (
          <div key={image.id} className="card-image">
            <div className="relative mx-auto flex h-40 max-h-[90%] w-full max-w-[90%] translate-y-[5%] overflow-hidden">
              <Image
                src={`https://mp-codante-foto-upload.s3.eu-north-1.amazonaws.com/${image.key}`}
                alt="Imagem de Cachorro"
                layout="fill"
                objectFit="cover"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <ButtonDeleteImage imageKey={image.key} />
          </div>
        ))}
      </div>
    </>
  )
}
