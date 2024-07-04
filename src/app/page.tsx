import { Galery } from '@/components/Galery'

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-[calc(100vh-48px)] max-w-4xl px-4 py-8 text-center">
        <header>
          <h1 className="mb-2 text-3xl font-black text-slate-600">
            Foto Upload
          </h1>
          <p className="mb-8 font-light text-gray-500">
            Galeria de fotos com Next.js, upload de imagens e S3
          </p>
        </header>

        {/* Dropdown de arquivos */}

        {/* Galeria de fotos */}
        <hr />
        <Galery />
      </main>
      <footer className="h-12 bg-slate-600" />
    </>
  )
}
