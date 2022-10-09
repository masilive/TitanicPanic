import { candleVMargin, candleHMargin, candleHSpacing, candleBodyWidth, candleWickWidth, candleHPadding, chartHeight } from "../store/global";
import { createMemo } from 'solid-js';

const Candlestick = (props) => {
    const spread = props.maxPrice - props.minPrice;

    const toRelativeValue = (value, isPriceInfo = true) => {
        return ((props.maxPrice - value) / spread) * (isPriceInfo? chartHeight() - (candleVMargin + candleVMargin) : chartHeight());
    };

    const upperWick = toRelativeValue(props.priceInfo.h) + candleVMargin;
    const upperBody = toRelativeValue(Math.max(props.priceInfo.o, props.priceInfo.c)) + candleVMargin;
    const lowerBody = toRelativeValue(Math.min(props.priceInfo.o, props.priceInfo.c)) + candleVMargin;
    const lowerWick = toRelativeValue(props.priceInfo.l) + candleVMargin;

    const candleX = candleHMargin + candleHPadding + (candleHSpacing * props.index);

    let points = "".concat(candleX + candleBodyWidth, ',', upperWick, ' ');    // 1
    points = points.concat(candleX + candleBodyWidth, ',', upperBody, ' ');    // 2
    points = points.concat(candleX, ',', upperBody, ' ');      // 3
    points = points.concat(candleX, ',', lowerBody, ' ');      // 4
    points = points.concat(candleX + candleBodyWidth, ',', lowerBody, ' ');      // 5
    points = points.concat(candleX + candleBodyWidth, ',', lowerWick, ' ');      // 6
    points = points.concat(candleX + candleBodyWidth + candleWickWidth, ',', lowerWick, ' ');      // 7
    points = points.concat(candleX + candleBodyWidth + candleWickWidth, ',', lowerBody, ' ');      // 8
    points = points.concat(candleX + candleBodyWidth + candleBodyWidth + candleWickWidth, ',', lowerBody, ' ');      // 9
    points = points.concat(candleX + candleBodyWidth + candleBodyWidth + candleWickWidth, ',', upperBody, ' ');      // 10
    points = points.concat(candleX + candleBodyWidth + candleWickWidth, ',', upperBody, ' ');      // 11
    points = points.concat(candleX + candleBodyWidth + candleWickWidth, ',', upperWick);           // 12

    const colour = props.priceInfo.c > props.priceInfo.o ? 'lime' : 'red';

    return (<polygon points={points} style={"fill:" + colour + ";stroke:" + colour + ";stroke-width:0;shape-rendering:geometricPrecision;"} />);
};

const Candlesticks = (props) => {
    const maxPrice = Math.max(...props.priceInfoArray.map(item => item.h));
    const minPrice = Math.min(...props.priceInfoArray.map(item => item.l));

    return (<>{props.priceInfoArray && props.priceInfoArray.map((priceInfo, index) => <Candlestick key={index} index={index} priceInfo={priceInfo} minPrice={minPrice} maxPrice={maxPrice} />)}</>);
};

export default Candlesticks;