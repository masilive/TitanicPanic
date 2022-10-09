import { Container, Row, Col, Tabs, Tab } from "solid-bootstrap";
import Candlesticks from "./Candlesticks";

const Charts = () => {
    return (<>
        <Container fluid>
            <Row>
                {/*Header*/}
                <Col></Col>
                <Col className='text-center'>
                    <h3>Titanic Panic</h3>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                {/*Body*/}
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" class="mb-3">
                    <Tab eventKey="home" title="Home">
                        <Container fluid='0'>
                            <Row>
                                <Col>
                                    <svg className="bg-secondary" width={chartWidth()} height={chartHeight()}>
                                        <Candlesticks priceInfoArray={priceInfoArray} />
                                    </svg>
                                </Col>
                                <Col xs lg='3'>

                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="stats" title="Stats">
                        Coming soon!
                    </Tab>
                </Tabs>
            </Row>
            <Row>
                <Col>
                    {/*Footer*/}
                </Col>
            </Row>
        </Container>
    </>);
};

export default Charts;