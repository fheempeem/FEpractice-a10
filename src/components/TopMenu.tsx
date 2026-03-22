import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);

    return (
        <div className='fixed top-0 left-0 right-0 z-30 flex h-[50px] flex-row items-center justify-between border-y border-solid border-lightgray bg-white px-4'>    
            <div className='flex items-center gap-2'>
                {
                    session ? (
                        <Link href="/api/auth/signout">
                            <div className='flex items-center h-full px-2 text-cyan-600 text-lg cursor-pointer'>
                                Sign-Out of {session.user?.name}
                            </div>
                        </Link>
                    ) : (
                        <Link href="/api/auth/signin">
                            <div className='flex items-center h-full px-2 text-cyan-600 text-lg cursor-pointer'>
                                Sign-In
                            </div>
                        </Link>
                    )
                }
                <TopMenuItem title='My Booking' pageRef='/mybooking' />
            </div>

            <div className='flex flex-row items-center h-full'>
                <TopMenuItem title='Booking' pageRef='/booking' />
                <Image src={'/img/logo.png'} className='h-full w-auto ml-2'alt='logo' width={0} height={0} sizes='100vh' />
            </div>
        </div>
    );
}