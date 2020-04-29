import React from 'react';
import { Card } from 'antd';
import CountUp from 'react-countup';
import './SingleCard.scss';

const SingleCard = props => {

    const renderValue = () => {
        if (!props.data) {
            return <p>Loading ....</p>
        }
        return (
            <Card
                title={props.title}
                bordered={false}
                className="singleCard"
                style={{ backgroundColor: `${props.bgColor}` }}
            >
                <CountUp
                    start={0}
                    end={props.data.value}
                    duration={2.5}
                    separator=","
                />
                <p>{props.content}</p>
            </Card>
        )
    }

    return (
        renderValue()
    )
}

export default SingleCard;
