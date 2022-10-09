import {createSignal} from "solid-js";

export const [chartWidth, setChartWidth] = createSignal('100%');
export const [chartHeight, setChartHeight] = createSignal('840px');
export const candleHSpacing = 6;
export const candleVSpacing = 10;
export const candleBodyWidth = 2;
export const candleWickWidth = 1;