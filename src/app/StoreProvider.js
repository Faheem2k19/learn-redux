'use client';

// write StoreProvider function component to manage the state of the application and export it as a default export.

// import { useRef } from "react";
import { Provider } from 'react-redux';
import store from '@/lib/store';


export default function StoreProvider({ children }) {

    return <Provider store={store}> {children} </Provider>
}