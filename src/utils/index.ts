import { createMachine } from "xstate";

export const promiseMachine = createMachine({
  id: "promise",
  initial: "pending",
  states: {
    pending: {
      on: {
        RESOLVE: { target: "resolved" },
        REJECT: { target: "rejected" },
      },
    },
    resolved: {
      on: {
        DO: { type: "do" },
      },
    },
    rejected: {
      type: "final",
    },
  },
});
