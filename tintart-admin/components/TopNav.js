import { useSession } from "next-auth/react";
import Link from "next/link"

export default function TopNav () {
    const icon = {
        height: '40px',
        width: '40px',
        backgroundPosition: 'center',
        objectFit: 'cover',
        borderRadius: '5px'
    }

    const {data: session} = useSession();


    return (
        // topbar
        <div className="bg-slate-200 flex justify-end w-full h-16 text-md">
            {/* admin */}
            <Link href='/account' className="flex w-[247px] place-items-center px-4 gap-5 hover:bg-slate-400">
                {/* img */}
                <img style={icon} src={session.user.image} /> 

                {/* text details */}
                <div className="flex flex-col w-3/4 leading-4 gap-[2px]">
                    <p className="font-bold tracking-tight text-lg leading-4 line-clamp-1"> {session.user.name} </p>
                    <p className="text-xs font-light text-slate-600"> {session.user.email} </p>
                </div>
            </Link>
        </div>
    )
}