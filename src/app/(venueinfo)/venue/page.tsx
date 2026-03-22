import CardPanel from "@/components/CardPanel";
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default async function Venue() {
    const venues = await getVenues()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Venue Program</h1>
            <VenueCatalog venueJson={venues}/>
        </main>
    );
}