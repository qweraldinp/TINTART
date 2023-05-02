import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession();

  return (
    <Layout page='Dashboard'>
      <p>asdasd</p>
    </Layout>
  )
}

