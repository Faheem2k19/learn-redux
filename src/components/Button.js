'use client';

export function Button({ type, handler, children }) {

    const style =
    type === "danger"
        ? "bg-red-500 text-white px-3 py-2 rounded"
        : "bg-blue-500 text-white px-3 py-2 rounded";

    return (
        <button
            className={style}
            onClick={handler}
        >
            {children}
        </button> 
    );
}