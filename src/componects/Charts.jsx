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
                        <Candlesticks />
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