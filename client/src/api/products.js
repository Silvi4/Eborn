import { basePath,apiVersion } from './config';
import axios from 'axios';

export function getProductsApi() {
    const url = `${basePath}/${apiVersion}/get-products`;

    const filters = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios.get(url,filters)
}

