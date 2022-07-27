import { useNavigate } from "react-router-dom"
import { listTrips, loginPage } from "../../constants/Constants"
import { MainHomeDiv } from "./styled"
import {goToPage} from "../../Routes/Coordinator"
import Logo from "./logo.png";


export default function MainHome() {

    const navigate = useNavigate()

    return(
        <MainHomeDiv>
            <img className="logo" src={Logo}/>
            <button onClick={()=>goToPage(navigate,listTrips)}>Lista de Viagens</button>
            <button onClick={()=> goToPage(navigate,loginPage)}>Login</button>
        </MainHomeDiv> 

    )
}