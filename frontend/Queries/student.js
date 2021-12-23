import { gql } from '@apollo/client'
//
//
export const GetStudent = gql`
query GetStudent($id: ID!) {
  students( where: { user: $id }) {
      id,
    user{
      id,
      email,
      username,
      fullname,
      wallet_topups{
        amount,
        payment_reference,
      },
      wallet{
        Balance,
        Overall_balance,
      }
    }
    requests{
      id
    }
  }
}
`
