import axios from "axios"



export const getContactMessages = async() =>{
    return await axios.get('http://127.0.0.1:8000/api/allContactMessages').then((res)=>{
        
        return res.data;
    })
}


// export const DeleteContactMessage = async (event: React.MouseEvent<HTMLImageElement, MouseEvent>,contact:any) => {


//     console.log(contact.id);
//      await axios.delete(`http://127.0.0.1:8000/api/deleteMessageContact/${contact.id}`)
//     //     ,{
//     //    headers: {
//     //      Authorization: `Bearer ${window.localStorage.getItem('token')}`
//     //    }
//     //  })
//      .then(res => {
      
//            return res.data
//    })
// }