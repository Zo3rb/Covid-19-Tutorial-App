import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from './image.png';
import "./App.scss";
import { Cards, Countries, Chart } from './components';
import { fetchData } from './apis';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

function App() {
  // Declaring Data as State in Our Application & Set it once Main Component Did Mount
  const [data, setData] = useState({});
  const [country, setCountry] = useState("")
  useEffect(() => {
    (async () => {
      const response = await fetchData()
      setData(response);
    })();
  }, [])

  const handleCountryChange = async country => {
    const data = await fetchData(country);
    setData(data)
    setCountry(country);
  }

  return (
    <Fragment>
      <Layout className="layout">
        <h1>Hello & Welcome in COVID-19 Tracker Tutorial Application</h1>
        <img src={img} alt="Covid-19 Logo" />
        <p>نسأل الله العفو والعافية</p>
        <p>React, React-Router-Dom, Axios, React-countup ChartJS, COVID-19-API, antDesign & Node-Sass</p>
        {/*Content Starts Here*/}
        <Content className="content">
          <Cards data={data} />
          <Countries handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} />
        </Content>
        {/*Content Ends Here*/}
        {/*Footer Starts Here*/}
        <Footer className="footer">All Rights Reserved For The Instructor</Footer>
        {/*Footer Ends Here*/}
      </Layout>
    </Fragment>
  );
}

export default App;
