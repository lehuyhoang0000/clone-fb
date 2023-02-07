import { City, ListParams, ListResponse, Student } from "models";
import axiosClient from "./clientAxios";

const studentApi = {

    getAll(params: ListParams): Promise<ListResponse<Student>> {    // trả về 1 obj, trong đấy có 2 key, 1 key là data(trả về 1 mảng là các city) và 1 cái là pagination
        const url = '/S';
        return axiosClient.get(url, { params });
    },

    getById(id: string): Promise<Student> {    
        const url = `/student/ ${id}`;
        return axiosClient.get(url);
    },

    add(data: Student): Promise<Student> {    
        const url = '/student';
        return axiosClient.post(url, data);
    },

    update(data: Student): Promise<Student> {    
        const url = '/student';
        return axiosClient.patch(url, data);
    },

    remove(id: string): Promise<any> {    
        const url = `/student/ ${id}`;
        return axiosClient.delete(url);
    },
}

export default studentApi;