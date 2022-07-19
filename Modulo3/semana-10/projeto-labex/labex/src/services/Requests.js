import axios from "axios";
import {useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { goToAdminHomePage } from "./Routes/coordinator";
toast.configure()



const BASE_URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/denise-castro-freire'
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJWUjdDcG0zMUNHamtSY1ZESlJtIiwiZW1haWwiOiJkZW5pc2VkZXZAZ21haWwuY29tLmJyIiwiaWF0IjoxNjU4MTk4Mzc5fQ.4n6PcIoIGXoNt6Hq6MTNCQfsfQF6k1X1SLNYpcyNX-Y"
  //martin@labenu.com
  //12345

//{
//    "success": true,
//    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJWUjdDcG0zMUNHamtSY1ZESlJtIiwiZW1haWwiOiJkZW5pc2VkZXZAZ21haWwuY29tLmJyIiwiaWF0IjoxNjU4MTk4Mzc5fQ.4n6PcIoIGXoNt6Hq6MTNCQfsfQF6k1X1SLNYpcyNX-Y",
//    "user": {
//        "id": "RVR7Cpm31CGjkRcVDJRm",
//        "email": "denisedev@gmail.com.br"
//    }

// const HEADER = {
//     headers: { 
//         'auth': token
//       }
//     };


export function useRequestData(url) {
    let [data, setData] = useState(undefined)

        useEffect( () => {
            axios.get(`${BASE_URL}${url}`).then( (response) => {      
                setData(response.data)
            }).catch( (error) => {
                alert(error)
            })
        }, [])

        return data; 

}

export function useRequestDataAuth(url, token) {
    let [data, setData] = useState(undefined)
        useEffect( () => {
            axios.get(`${BASE_URL}${url}`, {
                headers: { 
                    'auth': token
                  }
            }).then( (response) => {      
                setData(response.data)
            }).catch( (error) => {
                alert(error)
            })
        }, [])

        return data; 

}


export const Login = async(body) => {

  
    try { 
    const response = await axios.post(`${BASE_URL}login`,body);
    let loginResponse = {
        success: false,
        token: ""
    }
        loginResponse['success'] = response.data.success; 
        loginResponse['token']= response.data.token; 
        return(loginResponse)
    }
    catch(error)  {
        let loginResponse = {
            success: false,
            token: ""
        }
        loginResponse.success = false;
        loginResponse.token = ""; 
        
    }

  
}

export const CreateTrip = async(url, body, token) => {

    const HEADER = {
    headers: { 
        'auth': token
      }
    };
  
    try { 
    const response = await axios.post(`${BASE_URL}${url}`,body, HEADER);
   
        toast.success("Viagem criada com successo!")
        return(response.data)
    }
    catch(error)  {
        alert("Erro:", error)
        
    }
  
}

export const ApplyToTrip = async(url, body, token) => {

    const HEADER = {
    headers: { 
        'auth': token
      }
    };
  
    try { 
    const response = await axios.post(`${BASE_URL}${url}`,body, HEADER);
   
        toast.success("Obrigado por se candidatar!");
    
        return(response.data)
    }
    catch(error)  {
        alert("Erro:", error)
        
    }

  
}

export const DeleteTrip = async(url,token, trips) => {

    const HEADER = {
    headers: { 
        'auth': token
      }
    };


    try { 
    const response = await axios.delete(`${BASE_URL}${url}`, HEADER);
        
              
    }
    catch(error)  {
        alert("Erro:", error)
        
    }

  
}

export const DecideCandidate = async(url, body, token) => {

    const HEADER = {
    headers: { 
        'auth': token
      }
    };

  
    try { 
    const response = await axios.put(`${BASE_URL}${url}`,body, HEADER);
   
        return(response)
    
       
    }
    catch(error)  {
        alert("Erro:", error)
        
    }

  
}