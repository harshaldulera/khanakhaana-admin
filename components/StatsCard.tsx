interface StatsCardProps {
    title: string;
    value: number | string;
    icon: string;
  }
  
  export default function StatsCard({ title, value, icon }: StatsCardProps) {
    return (
      <div className="bg-[#fff] dark:bg-[#151718] rounded-lg shadow p-6 border border-[#687076] dark:border-[#9BA1A6]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#687076] dark:text-[#9BA1A6] text-sm">{title}</p>
            <p className="text-2xl font-bold mt-2 text-[#11181C] dark:text-[#ECEDEE]">{value}</p>
          </div>
          <span className="text-3xl">{icon}</span>
        </div>
      </div>
    );
  }