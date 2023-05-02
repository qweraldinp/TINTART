import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <Layout> rawr </Layout>
    )
}

