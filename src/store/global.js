import {createSignal} from "solid-js";

export const [chartWidth, setChartWidth] = createSignal('100%');
export const [chartHeight, setChartHeight] = createSignal('580px');
export const candleHSpacing = 10;
export const candleVSpacing = 10;
export const candleBodyWidth = 3;
export const candleWickWidth = 2;