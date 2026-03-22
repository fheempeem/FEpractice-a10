'use client'
import styles from "./banner.module.css"
import Image from 'next/image'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Banner () {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter();

    const { data: session } = useSession();
    
    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src = {covers[index%4]}
            alt = 'cover'
            fill = {true}
            priority
            objectFit="cover"/>
            {
                session ? (
                    <div className='z-30 absolute top-5 right-10 font-large text-cyan-600 text-xl'>
                        Welcome {session.user?.name}
                    </div>
                ) : null
            }
            <div className = "relative top-[100px] z-20 text-center text-white">
                <h1 className="text-4xl">where every event finds its venue</h1>
                <h3 className = "text-xl">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
            </div>
            <button className="bg-white text-black-600 border border-cyan-600 
                py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                hover:bg-cyan-600 hover:text-white "
                onClick={(e) => { 
                    e.stopPropagation();
                    router.push('/venue');
                }}>
                Select Venue
            </button>
        </div>
    );
}