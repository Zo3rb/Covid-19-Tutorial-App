
// Importing Axios to Make The Network Requests With
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
// Fetching Global Data From The API
export const fetchData = async country => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changeableUrl)
        return { confirmed, deaths, recovered, lastUpdate };
    }
    catch (error) {
        return error
    }
}
// Fetching Global Daily Data For Global Chart
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
};
