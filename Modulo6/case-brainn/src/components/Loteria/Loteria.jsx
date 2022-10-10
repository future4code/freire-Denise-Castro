import React from "react"
import GlobalContext from "../../global/GlobalContext"
import { ContainerNome, Logo } from "./styled"
import { Titulo } from "./styled"
import logo from "../../assets/loteria-logo.png"
import { useContext } from "react"

const Loteria = () => {

  const { states, setters } = useContext(GlobalContext)
  const { lotteries, lotteryId, lotteryName, apiDate } = states
  const { setLotteryName } = setters

  const name = apiDate.length > 0 && lotteries?.find((lottery) => {
    return lottery.id === Number(lotteryId)
  })

  if(lotteryId !== "7") {
    setLotteryName(name.nome)
  }

  return(
    <ContainerNome>
      { lotteryId !== "7" && <Logo src={logo} alt="Logo" /> }
      <Titulo>{ lotteryId !== "7" && lotteryName }</Titulo>
    </ContainerNome>
  )
}

export default Loteria