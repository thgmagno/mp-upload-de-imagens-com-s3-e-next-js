'use client'

import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'
import { useEffect, useState } from 'react'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'

export function UppyUpload() {
  const [uppy, setUppy] = useState<Uppy | null>(null)

  useEffect(() => {
    const uppy = new Uppy({})
    setUppy(uppy)
  }, [])

  // return <>{uppy && <Dashboard uppy={uppy} width={100} height={300} />}</>
  return 'implementar uppy'
}
