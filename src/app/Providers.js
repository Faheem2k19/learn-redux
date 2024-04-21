'use client';

import StoreProvider from "./StoreProvider";

export default function Providers({ children }) {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    );
}