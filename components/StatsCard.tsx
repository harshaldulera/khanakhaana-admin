interface StatsCardProps {
    title: string;
    value: number;
    icon: string;
  }
  
  export default function StatsCard({ title, value, icon }: StatsCardProps) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
          </div>
          <span className="text-3xl">{icon}</span>
        </div>
      </div>
    );
  }