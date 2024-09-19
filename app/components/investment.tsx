'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Investment() {
  return (
    <div className="space-y-6">
    <h1 className="text-3xl font-bold">Investment</h1>
    
    <Card>
      <CardHeader>
        <CardTitle>Investment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Invested</span>
            <span className="font-bold">$1,000.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Active Investments</span>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">ROI</span>
            <span className="font-bold text-green-500">+15%</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Investment Packages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: 'Starter', amount: '$100', roi: '10%' },
            { name: 'Advanced', amount: '$500', roi: '15%' },
            { name: 'Pro', amount: '$1,000', roi: '20%' },
          ].map((pkg, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div>
                <p className="font-medium">{pkg.name}</p>
                <p className="text-sm text-muted-foreground">{pkg.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-green-500">{pkg.roi} ROI</p>
                <Button size="sm" className="mt-2">Invest</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Investment Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] bg-secondary rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Investment Chart Placeholder</span>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Investment History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { date: '2023-06-01', package: 'Starter', amount: '$100', status: 'Active' },
            { date: '2023-05-15', package: 'Advanced', amount: '$500', status: 'Active' },
            { date: '2023-04-30', package: 'Pro', amount: '$1,000', status: 'Active' },
            { date: '2023-03-01', package: 'Starter', amount: '$100', status: 'Completed' },
          ].map((investment, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{investment.package}</p>
                <p className="text-sm text-muted-foreground">{investment.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{investment.amount}</p>
                <p className={`text-sm ${investment.status === 'Active' ? 'text-green-500' : 'text-muted-foreground'}`}>
                  {investment.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
  )
}