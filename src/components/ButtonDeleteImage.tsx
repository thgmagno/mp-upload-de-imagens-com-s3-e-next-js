'use client'

import { deleteImage } from '@/actions'
import { Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

export function ButtonDeleteImage({ imageKey }: { imageKey: string }) {
  const handleDeleteImage = () =>
    toast.promise(deleteImage(imageKey), {
      loading: 'Aguarde...',
      success: 'Imagem deletada com sucesso!',
      error: 'Falha ao deletar a imagem.',
    })

  return (
    <button onClick={handleDeleteImage} className="delete-image-button">
      <Trash2 size={28} className="text-red-500" />
    </button>
  )
}
