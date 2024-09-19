'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReferralLink() {
  const [referralLink] = useState('https://nextgen20.com/ref/user123')
  const [copyMessage, setCopyMessage] = useState('')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopyMessage('Copied to clipboard!')
    }, (err) => {
      console.error('Could not copy text: ', err)
      setCopyMessage('Failed to copy')
    })
  }

  useEffect(() => {
    if (copyMessage) {
      const timer = setTimeout(() => setCopyMessage(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [copyMessage])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Referral Link</CardTitle>
        <CardDescription>Share this link with your friends to earn rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <Input value={referralLink} readOnly />
            <Button onClick={copyToClipboard}>Copy</Button>
          </div>
          {copyMessage && (
            <p className="text-sm text-green-600">{copyMessage}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}