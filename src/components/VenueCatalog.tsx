import getVenues from "@/libs/getVenues";
import Card from "./Card"
import Link from "next/link"

export default async function VenueCatalog({venueJson} : {venueJson:VenueJson}) {
    var venueJsonReady = await venueJson;
    if (venueJsonReady == undefined) {
        venueJsonReady = await getVenues()
    }
    return (
        <>
            Explore {venueJsonReady.count} models in our catalog
            <div style={{
                margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap",
                justifyContent: "space-around", alignContent: "space-around"
            }}>
                {
                    venueJsonReady.data.map((venueItem)=>(
                        <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                        <Card 
                            venueName= {venueItem.name}
                            imgSrc={venueItem.picture}
                            value={venueItem.dailyrate || 0}
                        />
                        </Link>
                    ))
                }
                
            </div>
        </>
    )
}