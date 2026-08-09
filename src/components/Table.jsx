import BtnBlue from "./BtnBlue";

export default function Table({ head, data, onAction }) {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          {head.map((column) => (
            <th
              key={column.key}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-300">
        {data.map((row, index) => (
          <tr key={row.id ?? index}>
            {head.map((column) => (
              <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                {row[column.key]}
              </td>
            ))}
            <td>
              <BtnBlue onClick={() => onAction(row.id)}>Delete</BtnBlue>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
