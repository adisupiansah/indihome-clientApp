'use client'
import DetailPaket from '@/components/DetailPaket'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {id} = useParams()
  return (
    <div>
      <DetailPaket idPaket={id}/>
    </div>
  )
}

export default page
