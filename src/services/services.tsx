import axios from "axios";



export const getContactMessages = async() =>{
    return await axios.get('http://127.0.0.1:8000/api/allContactMessages').then((res)=>{
        
        return res.data;
    })
}


