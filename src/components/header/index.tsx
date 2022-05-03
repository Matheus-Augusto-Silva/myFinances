import LogoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

//no typescript devemos declarar o tipo 
interface HeaderProps{
  handleOpenNewTransactionModal: ()=>void;
}


export const Header = ({handleOpenNewTransactionModal}:HeaderProps) => {
  return (
     <Container>
        <Content>  
            <img src={LogoImg} alt="myfinances"></img>
            <button onClick={handleOpenNewTransactionModal}>Nova transação</button>
        </Content>
    </Container> 
  )
}