'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function RewardsComponent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Rewards</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Rewards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Binary Bonus</span>
              <span className="font-bold">$120.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Global Pool Reward</span>
              <span className="font-bold">$40.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weekly Rewards</span>
              <span className="font-bold">$25.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Daily Task Rewards</span>
              <span className="font-bold">$10.00</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reward History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: 'Binary Bonus', amount: '$12.00', date: '2023-06-15' },
              { type: 'Global Pool', amount: '$4.00', date: '2023-06-14' },
              { type: 'Weekly Reward', amount: '$25.00', date: '2023-06-13' },
              { type: 'Daily Tasks', amount: '$10.00', date: '2023-06-12' },
            ].map((reward, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium">{reward.type}</p>
                  <p className="text-sm text-muted-foreground">{reward.date}</p>
                </div>
                <span className="text-green-500">{reward.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Rewards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Next Binary Bonus</span>
                <span className="font-bold text-yellow-500">In 2 hours</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Next Global Pool</span>
                <span className="font-bold text-yellow-500">In 1 day</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reward Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Total Rewards Earned</span>
                <span className="font-bold">$1,250.00</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Reward Growth</span>
                <span className="font-bold text-green-500">+15% this month</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}