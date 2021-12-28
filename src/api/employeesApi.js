import axiosClient from "./axiosCilent";


const employeesApi={

    GetEmployees(){
        const url = '/employees';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetEmployeesID(id){
        const url = `/employees/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },

};

export default employeesApi; 