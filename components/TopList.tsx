interface TopListProps {
    title: string;
    data: Array<{
      id: string;
      name: string;
      donar_transactions_aggregate: {
        aggregate: {
          count: number;
        };
      };
    }>;
    type: 'donor' | 'ngo' | 'volunteer';
  }
  
  export default function TopList({ title, data, type }: TopListProps) {
    const getCountText = (count: number) => {
      switch (type) {
        case 'donor':
          return `${count} donations`;
        case 'volunteer':
          return `${count} deliveries`;
        default:
          return `${count} items`;
      }
    };

    return (
      <div className="bg-[#fff] dark:bg-[#151718] rounded-lg shadow p-6 border border-[#687076] dark:border-[#9BA1A6]">
        <h2 className="text-lg font-semibold mb-4 text-[#11181C] dark:text-[#ECEDEE]">{title}</h2>
        <div className="space-y-4">
          {data?.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-[#687076] dark:text-[#9BA1A6] mr-2">{index + 1}.</span>
                <span className="text-[#11181C] dark:text-[#ECEDEE]">{item.name}</span>
              </div>
              <span className="text-[#687076] dark:text-[#9BA1A6]">
                {getCountText(item.donar_transactions_aggregate.aggregate.count)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }