type TableSkeletonProps = {
  rows?: number;
  column: number;
};

const TableSkeleton = ({ rows = 3, column }: TableSkeletonProps) => {
  return (
    <>
      {[...Array(rows)].map((_: any, i: number) => (
        <tr key={i}>
          {[...Array(column)].map((_: any, i: number) => (
            <td
              key={i}
              className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900"
            >
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableSkeleton;
