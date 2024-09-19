import Layout from '../components/layout'
import DepositForm from '../components/depositform'
import DepositHistory from '../components/deposithistory'

export default function DepositPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Deposit</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <DepositForm />
          <DepositHistory />
        </div>
      </div>
    </Layout>
  )
}