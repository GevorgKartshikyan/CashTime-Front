import axios from 'axios';

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const { data } = response;
    // console.log(data);
    return data.map((country) => ({
      value: country.cca2.toLowerCase(),
      label: country.name.common,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default fetchCountries;
