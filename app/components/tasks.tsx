'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function TasksComponent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tasks</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Daily Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { task: 'Social Media Engagement', completed: true, reward: '$2.00' },
              { task: 'Invite New Members', completed: false, reward: '$5.00' },
              { task: 'Complete Survey', completed: true, reward: '$1.00' },
              { task: 'Watch Training Video', completed: false, reward: '$2.00' },
            ].map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium">{task.task}</p>
                  <p className="text-sm text-muted-foreground">Reward: {task.reward}</p>
                </div>
                <div>
                  {task.completed ? (
                    <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-full">Completed</span>
                  ) : (
                    <Button size="sm">Complete</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={50} className="h-2 mb-2" />
          <p className="text-center text-sm text-muted-foreground">2/4 Tasks Completed</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Task Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Completed Today</span>
              <span className="font-bold">2/4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Earned This Week</span>
              <span className="font-bold text-green-500">$21.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Completion Rate</span>
              <span className="font-bold">75%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Task Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">{day}</span>
                  <span className="text-sm font-medium">
                    {index <= 3 ? '4/4' : index === 4 ? '2/4' : '0/4'}
                  </span>
                </div>
                <Progress value={index <= 3 ? 100 : index === 4 ? 50 : 0} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}