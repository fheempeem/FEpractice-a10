import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems: BookingItem[]
}

const initialState: BookState = {
    bookItems: []
}

export const bookSlice = createSlice({ 
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            const existingIndex = state.bookItems.findIndex(obj => 
                obj.venue === action.payload.venue &&
                obj.bookDate === action.payload.bookDate
            );
            if (existingIndex >= 0) {
                state.bookItems[existingIndex] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(obj => {
                const isSameBooking =
                    obj.nameLastname === action.payload.nameLastname &&
                    obj.tel === action.payload.tel &&
                    obj.venue === action.payload.venue &&
                    obj.bookDate === action.payload.bookDate;
                return !isSameBooking;
            });
        }
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
