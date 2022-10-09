import { Container, Row, Col, Tabs, Tab } from "solid-bootstrap";
import { chartWidth, chartHeight, candleVSpacing, candleHSpacing, candleBodyWidth, candleWickWidth, candleHPadding } from "../store/global";

const Candlestick = (props) => {

    const upperWick = props.priceInfo.high;
    const upperBody = Math.max(props.priceInfo.open, props.priceInfo.close);
    const lowerBody = Math.min(props.priceInfo.open, props.priceInfo.close);
    const lowerWick = props.priceInfo.low;

    let points = "".concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth, ',', candleVSpacing + upperWick, ' ');    // 1
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth, ',', candleVSpacing + upperBody, ' ');    // 2
    points = points.concat(candleHPadding + (candleHSpacing * props.index), ',', candleVSpacing + upperBody, ' ');      // 3
    points = points.concat(candleHPadding + (candleHSpacing * props.index), ',', candleVSpacing + lowerBody, ' ');      // 4
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth, ',', candleVSpacing + lowerBody, ' ');      // 5
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth, ',', candleVSpacing + lowerWick, ' ');      // 6
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth + candleWickWidth, ',', candleVSpacing + lowerWick, ' ');      // 7
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth + candleWickWidth, ',', candleVSpacing + lowerBody, ' ');      // 8
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + (candleBodyWidth * 2) + candleWickWidth, ',', candleVSpacing + lowerBody, ' ');      // 9
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + (candleBodyWidth * 2) + candleWickWidth, ',', candleVSpacing + upperBody, ' ');      // 10
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth + candleWickWidth, ',', candleVSpacing + upperBody, ' ');      // 11
    points = points.concat(candleHPadding + (candleHSpacing * props.index) + candleBodyWidth + candleWickWidth, ',', candleVSpacing + upperWick);           // 12

    const colour = props.priceInfo.close > props.priceInfo.open ? 'lime' : 'red';

    return (<polygon points={points} style={"fill:" + colour + ";stroke:" + colour + ";stroke-width:0;shape-rendering:geometricPrecision;"} />);
};

const Candlesticks = () => {
    const pricesInfo = [{ open: 10, high: 0, low: 80, close: 30 }, { open: 80, high: 30, low: 145, close: 140 }, { open: 80, high: 0, low: 90, close: 10 },
    { open: 10, high: 0, low: 80, close: 30 }, { open: 80, high: 30, low: 145, close: 140 }, { open: 80, high: 0, low: 90, close: 10 }];

    return (<>
        <svg className="bg-secondary" width={chartWidth()} height={chartHeight()}>
            {pricesInfo && pricesInfo.map((priceInfo, index) => <Candlestick key={index} index={index} priceInfo={priceInfo} />)}
        </svg>
    </>);
};

export default Candlesticks;