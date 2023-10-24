import { createSlice } from "@reduxjs/toolkit";

function searchArray(array, param) {
    for (let i=0; i < array.length; i++) {
        if (array[i].id == param) { 
            return i;
        }
    }
    return false;
}


export const cartSlicer = createSlice({
    name: "cart",
    initialState: {
        contents: [],
        total: 0,
    },

    reducers: {
        add: (state, action) => {
            let existingIndex = searchArray(state.contents, action.payload.id);
            if (existingIndex) {
                state.contents = [...state.contents, state.contents[existingIndex].quantity += action.payload.quantity];
            } else {
                state.contents = [...state.contents, action.payload];
            }
        },
        remove: (state, action) => {
            state.contents = [...state.contents.filter(product => product.id !== action.payload)];
        },
        updatetotal: (state, action) => {
            state.total = action.payload;
        },
    }
});

export const { add, remove, updatetotal } = cartSlicer.actions;

export default cartSlicer.reducer;