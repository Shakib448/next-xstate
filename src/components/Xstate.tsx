import { trafficLightMachine } from "@utils/TrafficLightMachine";
import { useMachine } from "@xstate/react";

const Xstate = () => {
  const [state, send] = useMachine(trafficLightMachine, { devTools: true });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col bg-gray-600 p-3 rounded-2xl space-y-2">
        <div
          className={`h-12 w-12 rounded-full cursor-pointer ${
            state.matches("red") ? "bg-red-500 " : "bg-red-900 "
          }`}
          onClick={() => state.matches("red")}
        />
        <div
          className={`h-12 w-12 rounded-full cursor-pointer ${
            state.matches("yellow") ? "bg-yellow-500 " : "bg-yellow-900 "
          }`}
          onClick={() => state.matches("yellow")}
        />
        <div
          className={`h-12 w-12 rounded-full cursor-pointer ${
            state.matches("green") ? "bg-green-500 " : "bg-green-900 "
          }`}
          onClick={() => state.matches("green")}
        />
        <button
          onClick={() => send("NEXT")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Xstate;
