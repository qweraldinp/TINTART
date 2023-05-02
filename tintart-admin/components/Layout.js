import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import SideBar from '@/components/SideBar';
import TopNav from './TopNav';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children, page}) {
    const { data: session } = useSession();
    if (!session) {
        return (
            <div className='-bg--secondaryColor w-screen h-screen flex items-center'>
                <div className='text-center w-full'>
                    <button onClick={() => signIn('google')} className='bg-white p-2 px-4 rounded-lg'> Login with Google </button>
                </div>
            </div>
        )
    }

  return (
    <div className='min-h-screen flex z-10'>
        <SideBar page={page}/>

        <div className='bg-slate-100 flex flex-col flex-grow'>
            <TopNav />

            <div className='p-6'> 
                {children} 
            </div>
        </div>
    </div>
  )
}

