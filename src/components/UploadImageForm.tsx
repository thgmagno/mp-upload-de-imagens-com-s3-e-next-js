'use client'

import { uploadImage } from '@/actions'
import toast from 'react-hot-toast'
import { ButtonFormSubmit } from './ButtonFormSubmit'

export function UploadImageForm() {
  const handleFormSubmit = async (formData: FormData) => {
    const { success, message } = await uploadImage(formData)
    return success ? toast.success(message) : toast.error(message)
  }

  return (
    <form action={handleFormSubmit} className="my-8">
      <input type="file" name="image" id="image" />
      <ButtonFormSubmit />
    </form>
  )
}
