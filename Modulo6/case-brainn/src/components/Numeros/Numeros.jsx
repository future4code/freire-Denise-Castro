import React from "react"
import { useContext } from "react"
import { CirculoDosNumeros, ContainerNumeros,} from "./styled"
import GlobalContext from "../../global/GlobalContext"

const Numeros = () => {

  const { states } = useContext(GlobalContext)
  const { numbers, lotteryId } = states

  return (
    <ContainerNumeros>
      {lotteryId !== "7" &&
        numbers.map(number => <CirculoDosNumeros key={number}>{number}</CirculoDosNumeros>)}
    </ContainerNumeros>
  )
}

export default Numeros