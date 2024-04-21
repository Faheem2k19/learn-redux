import { createSlice } from '@reduxjs/toolkit'; // import the createSlice function from the @reduxjs/toolkit package.

const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
]; // define the initial state of the counter slice.

const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action) => {
          const counterIndex = state.findIndex(
            (counter) => counter.id === action.payload
        );

        state[counterIndex].value++;
        },
        decrement: (state, action) => {
          const counterIndex = state.findIndex(
            (counter) => counter.id === action.payload
        );

        state[counterIndex].value--;
        }
    }
});

export default counterSlice.reducer; // export the reducer function from the slice file to use in the store configuration.

export const { increment, decrement } = counterSlice.actions; // export the action creators from the slice file to use in the components.