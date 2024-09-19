'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { rank: 1, name: 'John Doe', earnings: '$1,200' },
              { rank: 2, name: 'Jane Smith', earnings: '$980' },
              { rank: 3, name: 'Bob Johnson', earnings: '$850' },
              { rank: 4, name: 'Alice Brown', earnings: '$720' },
              { rank: 5, name: 'Charlie Davis', earnings: '$650' },
            ].map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    index < 3 ? 'bg-yellow-500 text-yellow-900' : 'bg-gray-500 text-gray-100'
                  }`}>
                    {performer.rank}
                  </span>
                  <span>{performer.name}</span>
                </div>
                <span className="font-bold text-green-500">{performer.earnings}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Ranking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4">
                27
              </span>
              <span>You</span>
            </div>
            <span className="font-bold text-green-500">$320</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Leaderboard Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">Total Earnings</Button>
            <Button variant="outline" className="w-full justify-start">Referrals</Button>
            <Button variant="outline" className="w-full justify-start">Task Completion</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Fast Starter', description: 'Completed all tasks in first week', date: '2023-06-01' },
              { name: 'Network Builder', description: 'Referred 5 active members', date: '2023-06-10' },
              { name: 'Investment Pro', description: 'Invested in all packages', date: '2023-06-15' },
            ].map((achievement, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg">
                <h3 className="font-bold">{achievement.name}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                <p className="text-xs text-muted-foreground mt-2">Achieved on: {achievement.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}