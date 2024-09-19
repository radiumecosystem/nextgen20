'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Network() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Network</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Network</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Direct Referrals</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Team Size</span>
              <span className="font-bold">27</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Members</span>
              <span className="font-bold">22</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Binary Tree</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-secondary rounded-lg flex items-center justify-center mb-4">
            <span className="text-muted-foreground">Binary Tree Visualization Placeholder</span>
          </div>
          <div className="flex justify-around">
            <div className="text-center">
              <p className="font-medium">Left Leg</p>
              <p className="text-2xl font-bold">14</p>
            </div>
            <div className="text-center">
              <p className="font-medium">Right Leg</p>
              <p className="text-2xl font-bold">13</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Team Investments</span>
                <span className="font-bold">$5,400</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Team Earnings</span>
                <span className="font-bold text-green-500">$720</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Alice Smith', date: '2023-06-15', level: 'Level 1' },
              { name: 'Bob Johnson', date: '2023-06-14', level: 'Level 2' },
              { name: 'Charlie Brown', date: '2023-06-13', level: 'Level 1' },
              { name: 'David Lee', date: '2023-06-12', level: 'Level 3' },
            ].map((referral, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{referral.name}</p>
                  <p className="text-sm text-muted-foreground">{referral.date}</p>
                </div>
                <div className="text-sm font-medium">{referral.level}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}