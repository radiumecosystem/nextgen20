'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'

const QRCode = dynamic(() => import('qrcode.react').then(mod => mod.QRCodeSVG), { ssr: false })

export default function DepositForm() {
  const [amount, setAmount] = useState('')
  const [method, setMethod] = useState('bank')
  const [token, setToken] = useState('USDT')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the deposit submission
    console.log('Deposit submitted:', { amount, method, token })
    // Reset form
    setAmount('')
    setMethod('bank')
    setToken('USDT')
  }

  const cryptoAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' // Example BEP20 address

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Deposit</CardTitle>
        <CardDescription>Choose your deposit method and enter the amount.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              placeholder="Enter amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="method">Deposit Method</Label>
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger id="method">
                <SelectValue placeholder="Select deposit method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="card">Credit/Debit Card</SelectItem>
                <SelectItem value="crypto">Cryptocurrency (BEP20)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {method === 'crypto' && (
            <div className="space-y-2">
              <Label htmlFor="token">Select BEP20 Token</Label>
              <Select value={token} onValueChange={setToken}>
                <SelectTrigger id="token">
                  <SelectValue placeholder="Select BEP20 token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="BUSD">BUSD</SelectItem>
                  <SelectItem value="BNB">BNB</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {method === 'crypto' ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                {typeof window !== 'undefined' && <QRCode value={cryptoAddress} size={200} />}
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Scan QR code or copy address below</p>
                <p className="text-xs break-all bg-gray-100 p-2 rounded">{cryptoAddress}</p>
              </div>
              <p className="text-sm text-center text-red-500">
                Important: Only send {token} (BEP20) to this address. Sending any other token may result in permanent loss.
              </p>
            </div>
          ) : (
            <Button type="submit" className="w-full">Deposit</Button>
          )}
        </form>
      </CardContent>
    </Card>
  )
}