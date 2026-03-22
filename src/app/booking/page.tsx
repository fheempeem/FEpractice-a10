"use client"

import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface"; 
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {
    const [nameLastname, setNameLastname] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [venue, setVenue] = useState<string>("Bloom");
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const makeBooking = () => {
        if (nameLastname && tel && venue && bookingDate) {
            const item: BookingItem = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY-MM-DD")
            };
            dispatch(addBooking(item));
            alert("Booking added successfully!"); 
        } else {
            alert("Please fill in all fields");
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-20">
            <div className="text-xl py-4">New Booking</div>
            
            <div className="w-fit space-y-2 text-md text-left text-gray-600">
                <TextField 
                    name="Name-Lastname" 
                    label="Name-Lastname" 
                    variant="standard" 
                    value={nameLastname}
                    onChange={(e) => setNameLastname(e.target.value)} 
                />
                <TextField 
                    name="Contact-Number" 
                    label="Contact-Number" 
                    variant="standard" 
                    value={tel}
                    onChange={(e) => setTel(e.target.value)} 
                />
            </div>

            <div className="w-fit space-y-2 text-md text-left text-gray-600">
                <Select 
                    variant="standard" 
                    id="venue" 
                    className="h-[2em] w-[200px]"
                    value={venue} 
                    onChange={(e) => setVenue(e.target.value)} 
                >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </div>

            <div>
                <DateReserve onDateChange={(value: Dayjs | null) => setBookingDate(value)} />
            </div>
            
            <button 
                className="w-[120px] block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
                name="Book Venue" 
                onClick={makeBooking}
            >
                Book Venue
            </button>
        </main>
    );
}