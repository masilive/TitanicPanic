import { chartWidth, chartHeight, candleVMargin, candleHMargin, candleHSpacing, candleBodyWidth, candleWickWidth, candleHPadding } from "../store/global";

const Candlestick = (props) => {

    const upperWick = props.priceInfo.high + candleVMargin;
    const upperBody = Math.max(props.priceInfo.open, props.priceInfo.close) + candleVMargin;
    const lowerBody = Math.min(props.priceInfo.open, props.priceInfo.close) + candleVMargin;
    const lowerWick = props.priceInfo.low + candleVMargin;

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

    const colour = props.priceInfo.close > props.priceInfo.open ? 'lime' : 'red';

    return (<polygon points={points} style={"fill:" + colour + ";stroke:" + colour + ";stroke-width:0;shape-rendering:geometricPrecision;"} />);
};

const Candlesticks = (props) => {
    return (<>{props.priceInfoArray && props.priceInfoArray.map((priceInfo, index) => <Candlestick key={index} index={index} priceInfo={priceInfo} />)}</>);
};

export default Candlesticks;