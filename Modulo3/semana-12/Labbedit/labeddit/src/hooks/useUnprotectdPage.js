import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../routes/Coordinator"
import { useEffect } from "react"


export const useUnprotectedPage = () => {

        const navigate = useNavigate()
      
        useEffect( () => {
          const token = localStorage.getItem("token")
          if (token) {
            console.log("Não está logado")
            goToFeedPage(navigate)
          }
        }, [])
      }

