
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { TransactionContext, TransactionsProvider } from "./TransactionsContext";
import { NewTransactionModal } from "./components/newTransactionModal";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";

export default function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal(){
     setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
      // O Provider que passou a substituir o transactionsContext.provider precisa necessariamente receber um value, que é o valor do contexto
      <TransactionsProvider>  
          <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
          <Dashboard/>
          <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
          <GlobalStyle/>
      </TransactionsProvider>  

  );
}