import { Container } from "./styles";
import imginc from '../../assets/income.svg'
import imgout from '../../assets/outcome.svg'
import imgtot from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
   const {transactions} = useContext(TransactionsContext)
    console.log(transactions);
    return(
        <Container>
        <div>
            <header>
                <p>entradas</p>
                <img src={imginc} alt="entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>

        <div>
            <header>
                <p>saidas</p>
                <img src={imgout} alt="entradas" />
            </header>
            <strong>-R$500,00</strong>
        </div>

        <div className = "diferenciado">
            <header>
                <p>entradas</p>
                <img src={imgtot} alt="total" />
            </header>
            <strong>R$500,00</strong>
        </div>
        </Container>            
    );
}