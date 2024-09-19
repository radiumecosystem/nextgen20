import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const networkHistory = [
  { id: 1, username: 'alice92', date: '2023-06-01', position: 'Left', level: 2, volume: 500 },
  { id: 2, username: 'bob78', date: '2023-05-15', position: 'Right', level: 1, volume: 300 },
  { id: 3, username: 'charlie55', date: '2023-05-01', position: 'Left', level: 3, volume: 750 },
  { id: 4, username: 'david23', date: '2023-04-20', position: 'Left', level: 2, volume: 450 },
]

export default function NetworkHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network History</CardTitle>
        <CardDescription>Recent activity in your network</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {networkHistory.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.username}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.position}</TableCell>
                <TableCell>{entry.level}</TableCell>
                <TableCell>${entry.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}