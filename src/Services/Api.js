import axios from "axios";

const BaseUrl = "http://13.235.16.220:4002/api/";

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
