import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function venueDetailPage( {params} : {params : Promise<{vid:string}>}) {

    const {vid} = await params;
    const venueDetail = await getVenue(vid)

    /*
    const mockVenues = new Map()
    mockVenues.set("001", {venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"})
    mockVenues.set("002", {venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg"})
    mockVenues.set("003", {venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg"})
    */

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Venue ID : {venueDetail.data.id}</h1>
            <div className="flex flex-row my-5">
                <Image src = {venueDetail.data.picture} alt = "Venue Image" 
                width = {0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className=" text-left">
                    <div className="text-md mx-5">
                        Name : {venueDetail.data.name}
                    </div>
                    <div className="text-md mx-5">
                        Address : {venueDetail.data.address}
                    </div>
                    <div className="text-md mx-5">
                        District : {venueDetail.data.district}
                    </div>
                    <div className="text-md mx-5">
                        Province : {venueDetail.data.province}
                    </div>
                    <div className="text-md mx-5">
                        Postal Code : {venueDetail.data.postalcode}
                    </div>  
                    <div className="text-md mx-5">
                        Telephone Number : {venueDetail.data.tel}
                    </div> 
                </div>
                
            </div>

        </main>
    )
}

/*
export async function generateStaticParams() {
    return [{vid:'001'},{vid:'002'},{vid:'003'}]
}
    */