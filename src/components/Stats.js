// write an States component for display total counted value and export it as a default export. Need to pass count value as a prop to the States component.
"use client";

export default function Stats({ totalCount }) {
    return (
        <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-bold">Total count: {totalCount}</div>
        </div>
    );
}