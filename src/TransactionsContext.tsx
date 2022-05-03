import { createContext, ReactNode, useEffect, useState } from "react";
import React from 'react'
import { api } from "./services/api";

interface TransactionData{
    title: string,
    amount: number,
    category: string,
    type:string,
    createdAt: string,   
    id:number
  }

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>

interface TransactionsProviderProps{
  children:ReactNode;
}  

interface TransactionsContextData{
  transactions: TransactionData[],

  // deverá retornar uma Promise
  createTransaction: (transaction:TransactionInput) =>Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(

  {} as TransactionsContextData 
  );

export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
 
const [transactions,setTransactions] = useState<TransactionData[]>([])

   useEffect(() => {
      api.get('/transactions')
      .then(response=>setTransactions(response.data.transactions))
     
  },[]);

  // transformando em função assíncrona
  async function createTransaction(transactionInput:TransactionInput){

  // pegar a resposta para inserir os dados em tela  
  let response = await api.post('/transactions',{
    ...transactionInput,
    createdAt: new Date
  })
  const {transaction} = response.data

  setTransactions([...transactions,transaction])
  }

  return (
      <TransactionContext.Provider value={{transactions,createTransaction}}>
        {children}
      </TransactionContext.Provider>
  )
}