import { createMachine } from "xstate";

type TrafficLightEvents =
  | { type: "NEXT" }
  | { type: "TURN_ON" }
  | { type: "TURN_OFF" };
type TrafficLightStates =
  | { value: { ON: "red" }; context: undefined }
  | { value: { ON: "yellow" }; context: undefined }
  | { value: { ON: "green" }; context: undefined }
  | { value: "OFF"; context: undefined };
export const trafficLightMachine = createMachine<
  undefined,
  TrafficLightEvents,
  TrafficLightStates
>({
  initial: "OFF",
  id: "traffic-light",
  states: {
    ON: {
      initial: "red",
      on: { TURN_OFF: "OFF" },
      states: {
        green: {
          on: { NEXT: "yellow" },
          after: {
            3500: "yellow",
          },
        },
        yellow: {
          on: { NEXT: "red" },
          after: {
            1500: "red",
          },
        },
        red: {
          on: { NEXT: "green" },
          after: {
            5000: "green",
          },
        },
      },
    },
    OFF: {
      on: { TURN_ON: "ON" },
    },
  },
});
