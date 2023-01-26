import { MainDOMSource } from "@cycle/dom";
import xs from "xstream";

export const main = (sources: { DOM: MainDOMSource }) => {
  const increment$ = sources.DOM.select(".increment")
    .events("click")
    .mapTo("increment" as const);
  const reset$ = sources.DOM.select(".reset")
    .events("click")
    .mapTo("reset" as const);

  const state$ = xs.merge(increment$, reset$).fold((state, action) => {
    switch (action) {
      case "reset":
        return 0;
      case "increment":
        return state + 1;
    }
  }, 0);

  return {
    DOM: state$.map((count) => (
      <div>
        <div>Count: {count}</div>
        <button type="button" className="increment">
          +1
        </button>
        <button type="button" className="reset">
          Reset
        </button>
      </div>
    )),
  };
};
