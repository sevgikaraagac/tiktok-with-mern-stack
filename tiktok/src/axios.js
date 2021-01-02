import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-backend-mernstack.herokuapp.com",
});

export default instance;