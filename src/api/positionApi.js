import axiosClient from "./axiosCilent";


const positionApi={

    GetPosition(){
        const url = '/position';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },

};

export default positionApi; 