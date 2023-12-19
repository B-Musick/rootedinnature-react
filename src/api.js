import axios from 'axios';

const searchPlants = async (searchTerm) => {
    const response = await axios.get(`${process.env.REACT_APP_TREFLE_API_ENDPOINT}/plants/search`, {
        headers:{
            Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
        },
        params: {
            q: `${searchTerm}`
        }
    });

    return response.data.data;
}

export default searchPlants;