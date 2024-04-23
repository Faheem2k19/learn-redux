"use client";

import { Button } from "./Button";
import Count from "./Count";

export default function Counter({ count, onIncrement, onDecrement }) {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count} />
            <div className="flex space-x-5">
                <Button type="danger" handler={onDecrement}>Decrement</Button>
                <Button handler={onIncrement}>Increment</Button>
            </div>
        </div>

    );
}