import { useState, useMemo } from "react";
import Search from "./Search";

export default function AssetTable({ response, setShowDetails, report }) {
  const [editRowId, setEditRowId] = useState(null);
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("name");

  const columns = useMemo(
    () =>
      response.length > 0
        ? Object.keys(response[0]).filter((key) => key !== "id")
        : [],
    [response]
  );

  const handleRowClick = (item) => {
    const newEditRowId = item.id === editRowId ? null : item.id;
    setEditRowId(newEditRowId);
    setShowDetails(newEditRowId ? item : null);
  };

  const filteredAndSortedResponse = useMemo(() => {
    let filtered = response.filter((item) => {
      const itemValue = String(item[queryType]).toLowerCase();
      return itemValue.includes(query.toLowerCase());
    });

    const sortArray = (array) => {
      switch (report) {
        case "highest":
          return [...array].sort((a, b) => b.pricePaid - a.pricePaid);
        case "expired":
          return [...array].filter(
            (a) => new Date(a.warrantyExpiration) < new Date()
          );
        case "newest":
          return [...array].sort(
            (a, b) => new Date(b.datePurchased) - new Date(a.datePurchased)
          );
        case "owner":
          return [...array].sort(
            (a, b) =>
              a.ownerFirstName.localeCompare(b.ownerFirstName) ||
              a.ownerLastName.localeCompare(b.ownerLastName)
          );
        case "default":
        default:
          return array; // No sorting, just return the filtered array
      }
    };

    return sortArray(filtered);
  }, [response, report, query, queryType]);

  return (
    <div className="flex flex-col items-center">
      <Search
        query={query}
        setQuery={setQuery}
        setQueryType={setQueryType}
        queryType={queryType}
      />
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200 mt-4 shadow-sm border-b border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .replace(/^./, (str) => str.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedResponse.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(item)}
                className="hover:bg-gray-100 cursor-pointer"
              >
                {columns.map((column) => (
                  <td
                    key={`${item.id}-${column}`}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {column === "pricePaid"
                      ? Number(item[column]).toFixed(2) // Format if column is 'pricePaid'
                      : item[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
