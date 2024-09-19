import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const rewardsHistory = [
  { id: 1, date: '2023-06-01', amount: 50, type: 'Direct Referral' },
  { id: 2, date: '2023-05-15', amount: 25, type: 'Team Volume' },
  { id: 3, date: '2023-05-01', amount: 100, type: 'Rank Bonus' },
  { id: 4, date: '2023-04-20', amount: 75, type: 'Direct Referral' },
]

export default function ReferralRewards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Referral Rewards</CardTitle>
        <CardDescription>Your recent earnings from referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rewardsHistory.map((reward) => (
              <TableRow key={reward.id}>
                <TableCell>{reward.date}</TableCell>
                <TableCell>${reward.amount}</TableCell>
                <TableCell>{reward.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}