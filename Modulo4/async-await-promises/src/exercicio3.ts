import axios from "axios"
import { baseURL } from "./base_url"

//A) Nao temos erro

//B) Para poder usar o Promise.all que resulta mais rapido

// c)
export type user = {
	id: string,
	name: string,
	email: string
}

export const getAllSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data.map((res:any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email
    }
  })
}

const main = async (): Promise<void> => {
  try {
    await getAllSubscribers()
  } catch (error: any) {
    const res = error.response?.data || error.message
    console.log(res)
  }
}
