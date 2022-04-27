import { configureStore, createSlice } from "@reduxjs/toolkit";
import { alertsSlice } from "./slices/alertSlice";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {
            id: 1,
            text: "faire course",
            done: true
        },
        {
            id: 1,
            text: "faire course",
            done: false
        }
    ],
    reducers: {
        addTask: (state, action) => {

        },
        deleteTask: () => {

        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        alerts: alertsSlice.reducer
    }
})