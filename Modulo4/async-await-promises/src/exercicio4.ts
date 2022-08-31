import axios from "axios"
import { baseURL } from "./base_url"

//a) é um put
//`${baseURL}/news`

type news = {
	title: string,
	content: string,
	date: number
}

// b)

type News = {
    title:string, 
    content:string, 
    date: Date
}

let createNews = async (body:News):Promise<void> => {
    axios.put(`${baseURL}/news`, body);
    
}