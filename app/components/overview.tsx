'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, Gift, BarChart2, Calendar, CheckSquare, ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, Activity } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [walletBalance, setWalletBalance] = React.useState(500)
  const [totalInvestment, setTotalInvestment] = React.useState(1000)
  const [totalEarnings, setTotalEarnings] = React.useState(250)
  const [transactions, setTransactions] = React.useState([
    { type: 'Deposit', amount: 100, date: '2023-06-01' },
    { type: 'Withdrawal', amount: -50, date: '2023-05-28' },
    { type: 'Earnings', amount: 25, date: '2023-05-25' },
  ])

  const handleDeposit = () => {
    const amount = 100
    setWalletBalance(prev => prev + amount)
    setTransactions(prev => [{ type: 'Deposit', amount, date: new Date().toISOString().split('T')[0] }, ...prev])
  }

  const handleWithdraw = () => {
    const amount = 50
    if (walletBalance >= amount) {
      setWalletBalance(prev => prev - amount)
      setTransactions(prev => [{ type: 'Withdrawal', amount: -amount, date: new Date().toISOString().split('T')[0] }, ...prev])
    }
  }

  const handleInvest = () => {
    const amount = 200
    if (walletBalance >= amount) {
      setWalletBalance(prev => prev - amount)
      setTotalInvestment(prev => prev + amount)
      setTransactions(prev => [{ type: 'Investment', amount: -amount, date: new Date().toISOString().split('T')[0] }, ...prev])
    }
  }

  return (
    <div className="container mx-auto">
     
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Wallet Balance */}
        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Wallet Balance</CardTitle>
            <Wallet className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${walletBalance.toFixed(2)}</div>
            <div className="flex mt-4 space-x-2">
              <Button size="sm" variant="secondary" onClick={handleDeposit}>Deposit</Button>
              <Button size="sm" variant="outline" onClick={handleWithdraw}>Withdraw</Button>
            </div>
          </CardContent>
        </Card>

        {/* Total Investment */}
        <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Total Investment</CardTitle>
            <DollarSign className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${totalInvestment.toFixed(2)}</div>
            <p className="text-sm opacity-80">+20% from last month</p>
            <Button size="sm" variant="secondary" className="mt-4" onClick={handleInvest}>Invest More</Button>
          </CardContent>
        </Card>

        {/* Total Earnings */}
        <Card className="bg-gradient-to-br from-yellow-500 to-red-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Total Earnings</CardTitle>
            <TrendingUp className="h-6 w-6" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${totalEarnings.toFixed(2)}</div>
            <p className="text-sm opacity-80">+5% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27</div>
            <p className="text-xs text-muted-foreground">3 new members this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across 2 packages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2d 5h</div>
            <p className="text-xs text-muted-foreground">Estimated $45.00</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/deposit" passHref>
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            <DollarSign className="mr-2 h-4 w-4" /> Deposit
          </Button>
        </Link>
        <Link href="/withdraw" passHref>
          <Button className="w-full bg-red-500 hover:bg-red-600">
            <ArrowDownRight className="mr-2 h-4 w-4" /> Withdraw
          </Button>
        </Link>
        <Link href="/refer" passHref>
          <Button className="w-full bg-green-500 hover:bg-green-600">
            <Users className="mr-2 h-4 w-4" /> Refer
          </Button>
        </Link>
        <Link href="/rewards" passHref>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
            <Gift className="mr-2 h-4 w-4" /> Rewards
          </Button>
        </Link>
      </div>

      {/* Transactions and Activity */}
      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transactions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Activity className="w-4 h-4 mr-2" />
            Transactions
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Recent Activity
          </TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-muted">
                    <div className={`rounded-full p-2 mr-4 ${transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {transaction.amount > 0 ? <ArrowUpRight className="h-6 w-6" /> : <ArrowDownRight className="h-6 w-6" />}
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{transaction.type}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: DollarSign, title: 'Binary Bonus Received', amount: '+$12.00', time: '2h ago' },
                  { icon: Users, title: 'New Referral Joined', amount: '', time: '5h ago' },
                  { icon: BarChart2, title: 'Global Pool Distribution', amount: '+$4.00', time: '1d ago' },
                  { icon: Calendar, title: 'Weekly Reward Claimed', amount: '+$25.00', time: '1d ago' },
                  { icon: CheckSquare, title: 'Daily Tasks Completed', amount: '+$10.00', time: '2d ago' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-muted">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4 space-y-1 flex-grow">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.amount && (
                      <div className="font-medium text-green-600">{activity.amount}</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}