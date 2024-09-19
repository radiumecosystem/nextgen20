import Layout from './components/layout'
import Overview from './components/overview'

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <Overview />
      </div>
    </Layout>
  )
}