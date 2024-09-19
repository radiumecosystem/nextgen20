import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReferralStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Referral Statistics</CardTitle>
        <CardDescription>Your referral performance at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Total Referrals</p>
            <p className="text-2xl font-bold">4</p>
          </div>
          <div>
            <p className="text-sm font-medium">Active Referrals</p>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div>
            <p className="text-sm font-medium">Total Earnings</p>
            <p className="text-2xl font-bold">$250</p>
          </div>
          <div>
            <p className="text-sm font-medium">This Month</p>
            <p className="text-2xl font-bold">$75</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}