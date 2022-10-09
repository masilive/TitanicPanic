import {createSignal} from "solid-js";

export const [chartWidth, setChartWidth] = createSignal('100%');
export const [chartHeight, setChartHeight] = createSignal('840px');
export const candleHSpacing = 7;
export const candleHPadding = 1;
export const candleHMargin = 8;
export const candleVMargin = 14;
export const candleBodyWidth = 2;
export const candleWickWidth = 1;