import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex p-5 border border-purple-300 rounded-md bg-slate-200">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="text-xl mr-2 font-semibold text-white px-3 py-2 bg-green-500 rounded-md"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="text-xl font-semibold text-white px-3 py-2 bg-green-500 rounded-md"
        >
          Increment
        </button>
        <h1 className="text-3xl font-semibold mx-5">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="text-xl font-semibold text-white px-3 py-2 bg-red-500 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="ml-2 text-xl font-semibold text-white px-3 py-2 bg-red-500 rounded-md"
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
}

export default App;
