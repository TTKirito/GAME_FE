import axios from 'axios'

const buildClient = ({ req }) =>{
    return axios.create({
        baseURL: 'https://casino.api.stg.kansino.nl/v1',
    })
}

export default buildClient