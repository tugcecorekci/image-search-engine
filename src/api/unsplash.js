import axios from "axios"

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BnV6o94VHm3c54OqroXtY2sDDS56tz6m0Rmuo4coQcE'
    }
})