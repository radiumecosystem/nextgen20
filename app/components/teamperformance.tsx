'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const initialData = [
  { name: "Week 1", left: 400, right: 240 },
  { name: "Week 2", left: 300, right: 139 },
  { name: "Week 3", left: 200, right: 980 },
  { name: "Week 4", left: 278, right: 390 },
  { name: "Week 5", left: 189, right: 480 },
  { name: "Week 6", left: 239, right: 380 },
  { name: "Week 7", left: 349, right: 430 },
]

export default function Component() {
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const labels = initialData.map(item => item.name)
    const leftData = initialData.map(item => item.left)
    const rightData = initialData.map(item => item.right)

    setChartData({
      labels,
      datasets: [
        {
          label: 'Left Leg',
          data: leftData,
          backgroundColor: 'hsl(var(--primary))',
        },
        {
          label: 'Right Leg',
          data: rightData,
          backgroundColor: 'hsl(var(--white))',
        },
      ],
    })
  }, [])

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        stacked: true,
      },
      y: {
        type: 'linear',
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Team Performance',
      },
    },
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
        <CardDescription>Weekly volume comparison between left and right legs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          {chartData.labels && chartData.labels.length > 0 ? (
            <Bar data={chartData} options={options} />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              No data available
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}