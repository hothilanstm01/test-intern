import axiosClient from "./axiosCilent";


const departmentApi={

    GetDepartment(){
        const url = '/department';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },
    GetDepartmentID(id){
        const url = `/department/${id}`;
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },

};

export default departmentApi; 