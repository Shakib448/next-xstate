import { createMachine, assign, DoneInvokeEvent, StateMachine } from "xstate";

type TypeEvent = { type: "TYPE"; value: string };
type SearchEvent = { type: "SEARCH" };

type JokesEvent = TypeEvent | SearchEvent;

type JokesState =
  | { value: "ready"; context: JokesContext }
  | { value: "searching"; context: JokesContext }
  | { value: "error"; context: JokesContext & { error: string } };

type JokesContext = {
  input: string;
  results: Joke[];
  error?: string;
};

interface Joke {
  id: string;
  joke: string;
}

const fetchJoke = async (input: string): Promise<Joke[]> => {
  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${input}&limit=5`,
    { headers: { Accept: "application/json" } }
  );
  return response.json();
};

export const jokesMachine: StateMachine<JokesContext, JokesState, JokesEvent> =
  createMachine(
    {
      id: "jokesMachine",
      initial: "ready",
      context: {
        input: "",
        results: [],
      },
      states: {
        ready: {
          on: { SEARCH: "searching" },
        },
        error: {
          on: { SEARCH: "searching", TYPE: "ready" },
        },
        searching: {
          invoke: {
            id: "fetchJokes",
            src: (context) => fetchJoke(context.input),
            onDone: {
              target: "ready",
              actions: assign<
                JokesContext,
                DoneInvokeEvent<{ results: Joke[] }>
              >({
                results: (context, event) => event.data.results,
              }),
            },
            onError: {
              target: "error",
              actions: assign<JokesContext, DoneInvokeEvent<Error>>({
                error: (context, event) => event.data.message,
              }),
            },
          },
        },
      },
      on: {
        TYPE: {
          actions: "typing",
        },
      },
    },
    {
      actions: {
        typing: assign((context, e) => ({ input: (e as TypeEvent).value })),
      },
    }
  );
