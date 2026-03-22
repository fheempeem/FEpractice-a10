"use client"

import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    if (bookItems.length === 0) {
        return (
            <div className="text-center text-xl text-gray-500 mt-10">
                No Venue Booking
            </div>
        );
    }

    return (
        <>
            {
                bookItems.map((bookingItem) => (
                    <div className="bg-stale-200 rounded px-5 mx-5 py-2 pb-18" key={bookingItem.nameLastname}>
                        <p>Name : {bookingItem.nameLastname}</p>
                        <p>Telephone Number : {bookingItem.tel}</p>
                        <p>Venue Name : {bookingItem.venue}</p>
                        <p>Booking Date : {bookingItem.bookDate}</p>
                        <button 
                            className="bottom-3 right-3 bg-white text-cyan-600 border border-cyan-600 
                            py-1 px-3 rounded shadow-sm transition-all hover:bg-cyan-600 hover:text-white" 
                            onClick={() => dispatch(removeBooking(bookingItem))}>
                            Cancel This Booking
                        </button>
                    </div>
                ))
            }
        </>
    )
}