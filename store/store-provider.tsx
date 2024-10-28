'use client';

import { Provider } from "react-redux";

import getStore from ".";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={getStore()}>{ children }</Provider>
    )
}