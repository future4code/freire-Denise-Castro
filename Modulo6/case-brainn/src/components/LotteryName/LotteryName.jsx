import React from "react"
import GlobalContext from "../../global/GlobalContext"
import { Logo } from "./styled"
import { Name } from "./styled"
import { NameContainer } from "./styled"
import logo from "../../assets/loteria-logo.png"
import { useContext } from "react"

const LotteryName = () => {

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
    <NameContainer>
      { lotteryId !== "7" && <Logo src={logo} alt="Logo" /> }
      <Name>{ lotteryId !== "7" && lotteryName }</Name>
    </NameContainer>
  )
}

export default LotteryName