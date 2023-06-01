import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeWrapper from '@/components/home/wrapper'
import TotalWrapper from '@/components/totalwrapper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <TotalWrapper/>
   </>
  )
}
