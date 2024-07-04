import Image from 'next/image'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

export async function Galery() {
  const s3Client = new S3Client({
    region: 'eu-north-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  })

  const objectListParams = new ListObjectsV2Command({
    Bucket: 'mp-codante-foto-upload',
  })

  const objectList = await s3Client.send(objectListParams)

  const imageList = objectList.Contents?.map((obj) => ({
    id: obj.ETag as string,
    key: obj.Key as string,
  }))

  return (
    <>
      <h2 className="my-4 text-2xl font-bold text-slate-600">
        Galeria de fotos
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {imageList?.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-md bg-white shadow-md"
          >
            <div className="p-2">
              <Image
                src={`https://mp-codante-foto-upload.s3.eu-north-1.amazonaws.com/${image.key}`}
                alt="Imagem de Cachorro"
                width={280}
                height={280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
