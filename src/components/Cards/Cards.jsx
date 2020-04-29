import React from 'react';
import SingleCard from './SingleCard';
import './Cards.scss';
import { Row, Col } from 'antd';


const Cards = props => {
    const { confirmed, recovered, deaths, lastUpdate } = props.data;
    return (
        <Row style={{ padding: "20px 0" }}>
            <Col className="col" xs={{ span: 20, offset: 2 }} md={{ span: 5, offset: 3 }}>
                <SingleCard
                    data={confirmed}
                    title="Infected"
                    content="Number of Active Cases of COVID-19"
                    bgColor="blue"
                />
            </Col>
            <Col className="col" xs={{ span: 20, offset: 2 }} md={{ span: 5, offset: 1 }}>
                <SingleCard
                    data={recovered}
                    title="Recovered"
                    content="Number Of Recoveries From COVID-19"
                    bgColor="green"
                />
            </Col>
            <Col className="col" xs={{ span: 20, offset: 2 }} md={{ span: 5, offset: 1 }}>
                <SingleCard
                    data={deaths}
                    title="Deaths"
                    content="Number of Deaths Caused by COVID-19"
                    bgColor="red"
                />
            </Col>
            <Col span={24} className="updated">
                Last Updated: {new Date(lastUpdate).toLocaleString()}
            </Col>
        </Row>
    );
}

export default Cards;
