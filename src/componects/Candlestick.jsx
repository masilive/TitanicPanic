import { Container, Row, Col, Tabs, Tab } from "solid-bootstrap";
import { chartWidth, chartHeight } from "../store/global";

const Candlestick = () => {

    return (<>
        <svg className="bg-secondary" width={chartWidth()} height={chartHeight()}> 

        </svg>
    </>);
};

export default Candlestick;