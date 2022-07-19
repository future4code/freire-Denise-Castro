import { useNavigate } from "react-router-dom"
import { listTrips, loginPage } from "../../constants/Constants"
import { MainHomeDiv } from "./styled"
import {goToPage} from "../../Routes/Coordinator"


export default function MainHome() {

    const navigate = useNavigate()

    return(
        <MainHomeDiv>
            <button onClick={()=>goToPage(navigate,listTrips)}>Lista De Viagens</button>
            <button onClick={()=> goToPage(navigate,loginPage)}>Login</button>
        </MainHomeDiv> 

    )
}