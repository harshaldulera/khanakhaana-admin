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
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="space-y-4">
          {data?.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">{index + 1}.</span>
                <span>{item.name}</span>
              </div>
              <span className="text-gray-500">
                {item.donar_transactions_aggregate.aggregate.count} deliveries
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }