import React from 'react'
import { Summary } from '../summary'
import { TransactionTable } from '../transactionsTable'
import { Container } from './styles'

export const Dashboard = () => {
  return (
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  )
}
