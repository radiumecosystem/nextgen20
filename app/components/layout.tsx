'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DollarSign, Users, PieChart, CheckSquare, ArrowUpRight, Search, Award, Bell, User, Menu } from 'lucide-react'

const tabs = [
  { name: 'Overview', icon: PieChart, href: '/' },
  { name: 'Investment', icon: DollarSign, href: '/investment' },
  { name: 'Network', icon: Users, href: '/network' },
  { name: 'Rewards', icon: ArrowUpRight, href: '/rewards' },
  { name: 'Tasks', icon: CheckSquare, href: '/tasks' },
  { name: 'Leaderboard', icon: Award, href: '/leaderboard' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-blue-500"></div>
              <h1 className="text-xl font-bold">NextGen 20</h1>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(false)}>
               <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 space-y-2 p-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex items-center space-x-2 rounded-lg px-4 py-2 ${
                  pathname === tab.href ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-full border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              </div>
              <button className="rounded-full p-2 hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 rounded-full p-2 hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-600" />
                <span className="hidden md:inline">John Doe</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}