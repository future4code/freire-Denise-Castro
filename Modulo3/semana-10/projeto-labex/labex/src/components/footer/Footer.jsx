import { FooterDiv } from "./styled"
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa"

export default function Footer() {

    return(
        <FooterDiv>
            <div>
                <h2> LabeX </h2>
                <p> Rua fitcícia </p>
            </div>
            
            <h4> Copyright © 2022 LabeX All rights reserved. </h4>

            <div>
                <button> <FaInstagram/> </button>
                <button> <FaLinkedin/> </button>
                <button> <FaTwitter/> </button>
                <button> <FaFacebook/> </button>
            </div>
        </FooterDiv>   
    )
}