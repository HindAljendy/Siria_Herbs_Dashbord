import axios from "axios";



export const getContactMessages = async (currentPage: number) => {
    return await axios.get(`http://127.0.0.1:8000/api/allContactMessages?page=${currentPage}`).then((res) => {

        return res.data;
    })
}








