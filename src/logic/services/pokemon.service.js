import axios from "axios"

export const fetchingPokemons = async () => {
    try {
        let config = {
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=100',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await axios(config)
        return {
            data: response.data,
            error: null,
        }

    } catch (error) {
        return {
            data: null,
            error: error.message
        }
    }
}