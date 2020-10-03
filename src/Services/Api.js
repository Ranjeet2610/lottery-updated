import axios from "axios";

const BaseUrl = "http://34.217.68.90:4000/api/";

export const POST = async (route, data, header='') => {
    try{
        if(header.headerStatus === true){
            const headers = {
                "Authorization" : "Bearer " + localStorage.getItem('token')
            }
            return await axios.post(BaseUrl+route, data, {headers})
        }else{
            return await axios.post(BaseUrl+route, data)
        }
    }
    catch{
        console.log("Error Occured !")
    }
}

export const GET = async (route, header='') => {
    try{
        if(header.headerStatus === true){
            const headers = {
               "Authorization" : "Bearer " + localStorage.getItem('token')
            }
            return await axios.get(BaseUrl+route, {headers} )
        }else{
            return await axios.get(BaseUrl+route)
        }
    }
    catch{
        console.log("Error Occured !")
    }
   
}