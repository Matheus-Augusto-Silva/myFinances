import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionsContext'
import { Container } from './styles'


export const Summary = () => {

  const {transactions} = useContext(TransactionContext);

  const totalDeposits = transactions.reduce((acc, transaction) =>{
    if(transaction.type==="deposit"){
      return acc + transaction.amount;
    }
    return acc
  },0);

  const totalWithdraws = transactions.reduce((acc, transaction) =>{
    if(transaction.type==="withdraw"){
      return acc - transaction.amount;
    }
    return acc
  },0);

  const totalTransactions = totalDeposits + totalWithdraws;

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ {totalDeposits},00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$ {totalWithdraws},00</strong>
      </div>
      <div  className='total-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ {totalTransactions},00</strong>
      </div>
    </Container>
  )
}