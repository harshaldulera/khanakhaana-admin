'use client';

import { useQuery } from '@apollo/client';
import { GET_STATISTICS, GET_TOP_DONORS, GET_TOP_NGOS, GET_TOP_VOLUNTEERS } from '@/lib/queries';
import StatsCard from '@/components/StatsCard';
import TopList from '@/components/TopList';

export default function Dashboard() {
  const { data: stats, loading: statsLoading } = useQuery(GET_STATISTICS);
  const { data: topDonors, loading: donorsLoading } = useQuery(GET_TOP_DONORS);
  const { data: topNgos, loading: ngosLoading } = useQuery(GET_TOP_NGOS);
  const { data: topVolunteers, loading: volunteersLoading } = useQuery(GET_TOP_VOLUNTEERS);

  if (statsLoading || donorsLoading || ngosLoading || volunteersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Donors"
          value={stats?.donors_aggregate.aggregate.count}
          icon="👥"
        />
        <StatsCard 
          title="Total NGOs"
          value={stats?.ngos_aggregate.aggregate.count}
          icon="🏢"
        />
        <StatsCard 
          title="Total Volunteers"
          value={stats?.volunteers_aggregate.aggregate.count}
          icon="🚗"
        />
        <StatsCard 
          title="Deliveries Completed"
          value={stats?.donar_transaction_aggregate.aggregate.count}
          icon="✅"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TopList 
          title="Top Donors"
          data={topDonors?.donar}
          type="donor"
        />
        <TopList 
          title="Top NGOs"
          data={topNgos?.ngo}
          type="ngo"
        />
        <TopList 
          title="Top Volunteers"
          data={topVolunteers?.volunteer}
          type="volunteer"
        />
      </div>
    </div>
  );
}