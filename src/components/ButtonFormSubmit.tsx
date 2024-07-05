'use client'

import { useFormStatus } from 'react-dom'

export function ButtonFormSubmit() {
  const { pending } = useFormStatus()

  return (
    <button
      className="w-40 rounded bg-slate-600 p-2 text-white disabled:cursor-not-allowed disabled:opacity-65"
      disabled={pending}
    >
      {pending ? 'Aguarde...' : 'Enviar Imagem'}
    </button>
  )
}
