// write a button component using tailwindcss classes and export it as a named export. Need to pass className and onClick as props to the Button component.
"use client";

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