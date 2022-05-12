import { promiseMachine } from "@utils";
import { useMachine } from "@xstate/react";

const Xstate = () => {
  const [state, send] = useMachine(promiseMachine, { devTools: true });

  return (
    <div>
      {/** You can listen to what state the service is in */}
      {state.matches("pending") && <p>Loading...</p>}
      {state.matches("rejected") && <p>Promise Rejected</p>}
      {state.matches("resolved") && <p>Promise Resolved</p>}
      <div>
        {/** You can send events to the running service */}
        <button onClick={() => send("RESOLVE")}>Resolve</button>
        <button onClick={() => send("REJECT")}>Reject</button>
      </div>
    </div>
  );
};

export default Xstate;
