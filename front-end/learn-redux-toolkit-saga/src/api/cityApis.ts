import { City, ListResponse } from "models";
import axiosClient from "./clientAxios";

const cityApi = {

    getAll(): Promise<ListResponse<City>> {    // trả về 1 obj, trong đấy có 2 key, 1 key là data(trả về 1 mảng là các city) và 1 cái là pagination
        const url = '/cities';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10 
            }
        });
    },
}

export default cityApi;