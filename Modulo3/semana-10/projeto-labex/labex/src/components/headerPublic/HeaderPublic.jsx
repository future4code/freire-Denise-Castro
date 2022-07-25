import { HeaderDiv } from "./styled"
import { useNavigate } from "react-router-dom"
import {goToHome, goToAdminHomePage} from "../../Routes/Coordinator"
import {ImHome3} from "react-icons/im";

export default function HeaderPublic() {

    const navigate = useNavigate()

    return(
        <HeaderDiv>
            <h1> LabeX </h1>
            <div>
                <button onClick={() => goToHome(navigate)}> <ImHome3/> </button>
                <button onClick={() => goToAdminHomePage(navigate)}> Área administrativa </button>
            </div> 
        </HeaderDiv>   
    )
}