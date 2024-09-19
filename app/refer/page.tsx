import Layout from '../components/layout'
import ReferralLink from '../components/referrallink'
import ReferralStats from '../components/referral-stats'
import ReferredUsers from '../components/referredusers'
import ReferralTree from '../components/referraltree'

export default function ReferPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Refer a Friend</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <ReferralLink />
          <ReferralStats />
        </div>
        <ReferralTree />
        <ReferredUsers />
      </div>
    </Layout>
  )
}