import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerName: "",
    customerPhone: "",
    guets: 0,
    table: "",
};


const customerSlice = createSlice({
    name: "customer",
    initialState,

    reducers: {
        setCustomer: (state, action) => {
            const { name, phone, guests } = action.payload;
            state.customerName = name;
            state.customerPhone = phone;
            state.guests = guests;
        },

        removeCustomer: (state) => {
            state.customerName = "";
            state.customerPhone = "";
            state.guests = 0;
            state.table = null;
        },

        updateTable: (state, action) => {
            state.table = action.payload.table;
        }
    }
})