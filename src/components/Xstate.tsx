import { promiseMachine } from "@utils";
import { useMachine } from "@xstate/react";

const Xstate = () => {
  const [state, send] = useMachine(promiseMachine, { devTools: true });

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col bg-gray-600 p-3 rounded-2xl space-y-2">
        <div className="h-12 w-12 rounded-full bg-red-500 cursor-pointer" />
        <div className="h-12 w-12 rounded-full bg-yellow-500 cursor-pointer" />
        <div className="h-12 w-12 rounded-full bg-green-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Xstate;
