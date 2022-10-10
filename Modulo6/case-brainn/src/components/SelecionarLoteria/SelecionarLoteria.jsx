import React from "react"
import { useContext } from "react"
import GlobalContext from "../../global/GlobalContext"
import {Selecionar} from "./styled"


const SelecionarLoteria = (props) => {
  
  const {states} = useContext(GlobalContext)
  const {lotteries} = states

  const lotteryOption = lotteries.map((lottery) => {
    return <option key={lottery.id} value={lottery.id} id={lottery.nome}> {lottery.nome} </option>
  })

  return(
    <div>
      <Selecionar name="SelectLottery" id="SelectLottery" onChange={props.onChangeLottery}>
        <option value="7">Escolha a loteria</option>
        {lotteryOption}
      </Selecionar>
    </div>
  )
}

export default SelecionarLoteria