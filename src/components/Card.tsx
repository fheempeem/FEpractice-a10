import { Rating } from '@mui/material';
import InteractiveCard from './InteractiveCard';
import Image from 'next/image';

export default function Card( {venueName, imgSrc, onCompare, value} : {venueName : string, imgSrc : string, onCompare?:Function, value?:number}) {
    return (
        <InteractiveCard>
            <div className = 'w-full h-[70%] relative rounded-t-lg'>
            <Image src = {imgSrc}
                    alt = 'Place Picture'
                    fill = {true}
                    className='object-cover rounded-t-lg'/>
            </div>
            <div className = 'w-full h-[15%] p-[10px] text-black'>
                {venueName}
                
                
            </div>
            {
                onCompare ?
                <div className='w-full h-[15%] p-[10px]' 
                    onClick={(e) => { e.stopPropagation(); }}>
                    <Rating
                        id={`${venueName} Rating`}
                        name={`${venueName} Rating`}
                        data-testid={`${venueName} Rating`}
                        value={value}
                        onChange={(event, newValue) => {
                            if (onCompare) onCompare(venueName, newValue);
                        }} />
                </div>
                : ''
            }
                         
        </InteractiveCard>
    );
}