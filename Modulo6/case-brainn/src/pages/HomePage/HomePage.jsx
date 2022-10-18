import React from "react"
import Concurso from "../../components/Concurso/Concurso"
import Loteria from "../../components/Loteria/Loteria"
import SelecionarLoteria from "../../components/SelecionarLoteria/SelecionarLoteria"
import Numeros from "../../components/Numeros/Numeros"
import GlobalContext from "../../global/GlobalContext"
import { Lateral, Pagina } from "./styled"
import { MainContainer } from "./styled"
import { useContext } from "react"
import { Footer } from "./styled"
import { useEffect } from "react"


const HomePage = () => {
  const { states, setters } = useContext(GlobalContext)
  const { lotteryId, contestData, apiDate } = states
  const { setLotteryId } = setters


  let color
  switch (lotteryId) {
    case "0":
      color = "#6BEFA3"
      break
    case "1":
      color = "#8666EF"
      break
    case "2":
      color = "#DD7AC6"
      break
    case "3":
      color = "#FFAB64"
      break
    case "4":
      color = "#5AAD7D"
      break
    case "5":
      color = "#BFAF83"
      break
    default:
      color = "#9f9f9f"
      break;
  }

  const onChangeLottery = (event) => {
    setLotteryId(event.target.value)
  }

  return (
    <Pagina>
      <Lateral select={color}>
        <div>
          <SelecionarLoteria onChangeLottery={onChangeLottery} />
        </div>

        <Loteria/>

        <Concurso date={apiDate} id={contestData.id} lotteryId={lotteryId} />
      </Lateral>

      <MainContainer>
        <Numeros />

        {lotteryId !== "7" && <Footer>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </Footer>}
        
      </MainContainer>
    </Pagina>
  )
}

export default HomePage