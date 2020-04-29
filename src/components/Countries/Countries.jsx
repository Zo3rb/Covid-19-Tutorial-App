import React, { useState, useEffect } from 'react';
import { Form, Select, Row, Col } from 'antd'
import { fetchCountries } from '../../apis';


const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (
        <Row style={{ padding: "15px 0" }}>
            <Col span={12} offset={6}>
                <h3 style={{ color: "blue", fontWeight: "bold", textAlign: "center" }}>Select Country to Check</h3>
                <Form>
                    <Select defaultValue="" onChange={(e) => handleCountryChange(e)} style={{ width: "100%" }}>
                        <Select.Option value="">Global</Select.Option>
                        {countries.map((country, i) => <Select.Option key={i} value={country}>{country}</Select.Option>)}
                    </Select>
                </Form>
            </Col>
        </Row>
    );
};

export default Countries;
