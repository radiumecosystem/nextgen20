'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const depositHistory = [
  { id: 1, date: '2023-06-01', amount: 1000, method: 'Bank Transfer', status: 'Completed' },
  { id: 2, date: '2023-05-15', amount: 500, method: 'Credit Card', status: 'Completed' },
  { id: 3, date: '2023-05-01', amount: 250, method: 'Cryptocurrency', status: 'Pending' },
]

export default function DepositHistoryComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deposit History</CardTitle>
        <CardDescription>Your recent deposit transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {depositHistory.map((deposit) => (
              <TableRow key={deposit.id}>
                <TableCell>{deposit.date}</TableCell>
                <TableCell>${deposit.amount}</TableCell>
                <TableCell>{deposit.method}</TableCell>
                <TableCell>{deposit.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}