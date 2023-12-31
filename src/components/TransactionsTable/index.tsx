import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hospedagem do website</td>
                        <td className="withdraw">- 2.000 Kz</td>
                        <td>Freelancer</td>
                        <td>20/20/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">12.000 Kz</td>
                        <td>Freelancer</td>
                        <td>20/20/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}