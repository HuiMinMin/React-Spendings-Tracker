import axios from "axios";

export function get(url){
    return axios.get(url);
}

export function post(url, requestData){
    return axios.post(url, requestData);
}

export function put(url, requestData){
    return axios.put(url, requestData);
}

export function del(url, requestData){
    return axios.delete(url, {data: requestData});
}
  