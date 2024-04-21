'use client';

import { useDispatch, useSelector } from "react-redux";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import { decrement, increment } from "@/lib/features/counters/counterSlice";

export default function Home() {

  const dispatch = useDispatch();

  const counters = useSelector((state) => state.counters);

  const totalCount = counters.reduce(
    (sum, current) => sum + current.value,
    0
  );

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  }

  return (
    <main>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700"
      >
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter App
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <div className="space-y-5">
            {counters.map((counter) => (
              <Counter
                count={counter.value}
                key={counter.id}
                counter={counter}
                onIncrement={() => handleIncrement(counter.id)}
                onDecrement={() => handleDecrement(counter.id)}
              />
            ))}
          </div>
          <Stats totalCount={totalCount} />
        </div>
      </div>
    </main>
  );
}
