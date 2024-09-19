import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NetworkOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Overview</CardTitle>
        <CardDescription>Your network performance at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Total Members</p>
            <p className="text-2xl font-bold">42</p>
          </div>
          <div>
            <p className="text-sm font-medium">Total Volume</p>
            <p className="text-2xl font-bold">$10,000</p>
          </div>
          <div>
            <p className="text-sm font-medium">Left Leg Members</p>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div>
            <p className="text-sm font-medium">Right Leg Members</p>
            <p className="text-2xl font-bold">18</p>
          </div>
          <div>
            <p className="text-sm font-medium">Left Leg Volume</p>
            <p className="text-2xl font-bold">$5,800</p>
          </div>
          <div>
            <p className="text-sm font-medium">Right Leg Volume</p>
            <p className="text-2xl font-bold">$4,200</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}