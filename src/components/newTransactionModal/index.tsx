import { Container, RadioBox, TransactionTypeContainer } from './styles'
import Modal from 'react-modal';
import CloseImg from '../../assets/close.png'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react';
import { TransactionContext } from '../../TransactionsContext';
import { api } from '../../services/api';


Modal.setAppElement('#root')

interface NewModalProps{
  isOpen:boolean,
  onRequestClose:()=>void;
}

export const NewTransactionModal = ({isOpen,onRequestClose}:NewModalProps) => {

  const {createTransaction} = useContext(TransactionContext)

  const [type,setType] = useState('deposit')
  const [title,setTitle] = useState('');
  const [amount,setAmount]  = useState(0);
  const [category,setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

   await createTransaction({
      title,
      amount,
      category,
      type
    })

    // resetar o modal para a proxima transacao
    setTitle("")
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  
  }
   
  return (

       <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
              <button type="button" 
                      onClick={onRequestClose}  
                      className='react-modal-close'>
                <img src={CloseImg} alt="Fechar Modal"/>
              </button>

              <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                  placeholder="Titulo"
                  value={title}
                  onChange={event=>setTitle(event.target.value)}  
                />

                <input 
                  type="number" 
                  placeholder="Valor" 
                  value={amount}
                  onChange={event=>setAmount(Number(event.target.value))}    
                />

                <TransactionTypeContainer>
                    <RadioBox
                      type="button"
                      isActive={type==='deposit'}
                      onClick={()=>{setType('deposit')}}
                      activeColor='green'
                    >
                      <img src={IncomeImg} alt="Entrada" />
                      <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox 
                    type="button"
                    isActive={type==='withdraw'}
                    onClick={()=>{
                      setType('withdraw')}
                    }
                    activeColor='red'
                    >
                      <img src={OutcomeImg} alt="Saída" />
                      <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                placeholder="Categoria" 
                value={category}
                onChange={event=>setCategory(event.target.value)}  
                />

                <button type="submit">Cadastrar</button>  

              </Container>

        </Modal>
  )
}