import { createMachine, assign } from "xstate";

interface CounterContext {
  count: number;
  data: DataProps[];
}

type DataProps = {
  id: string;
  name: string;
};

type CounterEvent =
  | { type: "INCREMENT" }
  | {
      payload: DataProps;
      type: "ADD" | "payload";
    };

export const counterMachine = createMachine<CounterContext, CounterEvent>({
  id: "counter",
  initial: "add",
  context: { count: 0, data: [] },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: (ctx) => ctx.count + 1 }),
        },
      },
    },
    add: {
      on: {
        ADD: {
          actions: assign({
            data: (ctx, e) => [...ctx.data, e.payload],
          }),
        },
      },
    },
  },
});
