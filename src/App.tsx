import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex p-5 border border-purple-300 rounded-md bg-slate-200">
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
      </div>
    </div>
  );
}

export default App;
