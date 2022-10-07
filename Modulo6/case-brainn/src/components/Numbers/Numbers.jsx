import React from "react"
import { useContext } from "react"
import { NumbersContainer } from "./styled"
import { NumberCircle } from "./styled"
import GlobalContext from "../../global/GlobalContext"

const Numbers = () => {

  const { states } = useContext(GlobalContext)
  const { numbers, lotteryId } = states

  return (
    <NumbersContainer>
      {lotteryId !== "7" &&
        numbers.map(number => <NumberCircle key={number}>{number}</NumberCircle>)}
    </NumbersContainer>
  )
}

export default Numbers