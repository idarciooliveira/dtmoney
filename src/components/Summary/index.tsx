import { Container } from "./styles";
import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saida.svg'
import moneyImg from '../../assets/money.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>100.000,00 Kz</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- 30.000,00 Kz</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={moneyImg} alt="Total" />
                </header>
                <strong>70.000,00 Kz</strong>
            </div>
        </Container>
    )
}