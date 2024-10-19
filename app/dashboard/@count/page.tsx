import axios from 'axios'

const CountPage = async () => {
    const countLocations= await axios.get('http://127.0.0.1:3002/location')
    console.log(countLocations.data)
    return "Localizaciones existentes " + countLocations?.data.length;
}

export default CountPage
