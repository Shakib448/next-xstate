import { jokesMachine } from "@utils/JokesMachine";
import { useMachine } from "@xstate/react";

const JokeSearch = () => {
  const [{ context, matches }, send] = useMachine(jokesMachine, {
    devTools: true,
  });

  const { results, error, input } = context;
  return (
    <div className="flex h-screen justify-center items-center bg-black w-full">
      <div className="space-y-2">
        <h1 className="text-3xl text-white font-bold text-center">
          Dad Joke Search
        </h1>
        <div className="flex justify-center">
          <div className="xl:w-96">
            <div className="input-group relative flex  items-stretch w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                value={input}
                onChange={(e) => send({ type: "TYPE", value: e.target.value })}
              />
              <button
                className="btn inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
                disabled={matches("searching")}
                onClick={() => send("SEARCH")}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {matches("error") && <div>{error}</div>}
        <ul className="text-center">
          {results.map(({ joke, id }, index) => (
            <li className="text-md font-bold text-white" key={id}>
              {joke}
              {index !== results.length ? <hr /> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JokeSearch;
