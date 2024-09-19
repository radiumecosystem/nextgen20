import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from 'lucide-react'

type ReferralNode = {
  username: string;
  referrals: number;
  volume: number;
  children?: [ReferralNode?, ReferralNode?];
}

const referralData: ReferralNode = {
  username: 'You',
  referrals: 4,
  volume: 10000,
  children: [
    {
      username: 'Left Leg',
      referrals: 2,
      volume: 5000,
      children: [
        { username: 'Alice', referrals: 1, volume: 2000 },
        { username: 'Bob', referrals: 0, volume: 1000 }
      ]
    },
    {
      username: 'Right Leg',
      referrals: 1,
      volume: 3000,
      children: [
        { username: 'Charlie', referrals: 1, volume: 2000 },
        undefined
      ]
    }
  ]
}

function ReferralNode({ node }: { node: ReferralNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-24 h-24 bg-primary text-primary-foreground rounded-full mb-2">
        <User size={32} />
      </div>
      <div className="text-center">
        <p className="font-bold">{node.username}</p>
        <p className="text-sm">Referrals: {node.referrals}</p>
        <p className="text-sm">Volume: ${node.volume}</p>
      </div>
      {node.children && (
        <div className="flex mt-4 space-x-8">
          {node.children.map((child, index) => (
            <div key={index} className="flex flex-col items-center">
              {child ? (
                <ReferralNode node={child} />
              ) : (
                <div className="flex items-center justify-center w-24 h-24 bg-secondary text-secondary-foreground rounded-full mb-2">
                  <p className="text-2xl">+</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ReferralTree() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Referral Tree</CardTitle>
        <CardDescription>View your binary referral structure</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center pt-4">
          <ReferralNode node={referralData} />
        </div>
      </CardContent>
    </Card>
  )
}