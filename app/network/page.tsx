import dynamic from 'next/dynamic'
import Layout from '../components/layout'
import NetworkOverview from '../components/networkoverview'
import ReferralTree from '../components/referraltree'
import NetworkHistory from '../components/networkhistory'

const DynamicTeamPerformance = dynamic(() => import('../components/teamperformance'), {
  ssr: false,
})

export default function NetworkPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Your Network</h1>
        <NetworkOverview />
        <ReferralTree />
        <DynamicTeamPerformance />
        <NetworkHistory />
      </div>
    </Layout>
  )
}