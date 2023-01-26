import { makeDOMDriver } from "@cycle/dom";
import { Drivers, run } from "@cycle/run";
import { main } from "./main";

const drivers = { DOM: makeDOMDriver("#app") } as const satisfies Drivers;

run(main, drivers);
