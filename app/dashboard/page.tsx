'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client';
import StatsCard from '@/components/StatsCard';
import TopList from '@/components/TopList';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GET_STATISTICS, GET_TOP_DONORS, GET_TOP_VOLUNTEERS } from '@/lib/queries';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { data: stats, loading: statsLoading } = useQuery(GET_STATISTICS);
  const { data: topDonors, loading: donorsLoading } = useQuery(GET_TOP_DONORS);
  const { data: topVolunteers, loading: volunteersLoading } = useQuery(GET_TOP_VOLUNTEERS);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading || statsLoading || donorsLoading || volunteersLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff] dark:bg-[#151718]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d84012]"></div>
      </div>
    );
  }

  const statsData = [
    { 
      title: 'Total NGOs', 
      value: stats?.ngo_aggregate.aggregate.count || 0, 
      icon: '🏢' 
    },
    { 
      title: 'Total Donors', 
      value: stats?.donar_aggregate.aggregate.count || 0, 
      icon: '👥' 
    },
    { 
      title: 'Total Volunteers', 
      value: stats?.volunteer_aggregate.aggregate.count || 0, 
      icon: '🚗' 
    },
    { 
      title: 'Deliveries Completed', 
      value: stats?.donar_transaction_aggregate.aggregate.count || 0, 
      icon: '✅' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff] dark:bg-[#151718] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#11181C] dark:text-[#ECEDEE] mb-8">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Charts and Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Donors List */}
          <TopList
            title="Top Donors"
            data={topDonors?.donar || []}
            type="donor"
          />

          {/* Top Volunteers List */}
          <TopList
            title="Top Volunteers"
            data={topVolunteers?.volunteer || []}
            type="volunteer"
          />
        </div>
      </div>
    </div>
  );
}