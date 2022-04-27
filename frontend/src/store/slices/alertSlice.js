import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
    name: "alerts",
    initialState: [
        // {
        //     id: 0,
        //     title: "hello",
        //     text: "Transaction successfully operated !",
        //     type: "warning",
        //     disappear: "timeout"
        // },
        // {
        //     id: 1,
        //     title: "hello",
        //     text: "Transaction successfully !",
        //     type: "success",
        //     disappear: "click"
        // },
    ],
    reducers: {
        addAlert: (state, { payload }) => {
            state.push({
                id: state.length,
                title: payload.title,
                text: payload.text,
                type: payload.type,
                disappear: payload.disappear
            })
        },
        deleteAlert: (state, {payload}) => {
            state = state.filter((alert) => {
                return alert.id !== payload.id
            })
            return state;
        },
        editAlert: () => {
            
        }
    }
})

export const { addAlert, deleteAlert, editAlert } = alertsSlice.actions;