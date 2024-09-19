'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const referredUsers = [
  { id: 1, username: 'alice92', joinDate: '2023-06-01', status: 'Active' },
  { id: 2, username: 'bob78', joinDate: '2023-05-15', status: 'Inactive' },
  { id: 3, username: 'charlie55', joinDate: '2023-05-01', status: 'Active' },
]

export default function ReferredUsersComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Referred Users</CardTitle>
        <CardDescription>List of users you have referred</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}