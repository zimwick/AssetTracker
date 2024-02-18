import { useState, useMemo } from "react";
import styles from "./AssetTable.module.css";

export default function AssetTable({ response, setShowDetails, report }) {
  const [editRowId, setEditRowId] = useState(null);

  const columns =
    response.length > 0
      ? Object.keys(response[0]).filter((key) => key !== "id")
      : [];

  const handleRowClick = (item) => {
    const newEditRowId = item.id === editRowId ? null : item.id;
    setEditRowId(newEditRowId);
    setShowDetails(newEditRowId ? item : null);
  };

  const sortedResponse = useMemo(() => {
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
          return array; // No sorting, return the original array
      }
    };

    return sortArray(response);
  }, [response, report]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>
              {column
                .replace(/([A-Z])/g, " $1")
                .trim()
                .replace(/^./, (str) => str.toUpperCase())}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedResponse.map((item) => (
          <tr
            className={styles.tr}
            key={item.id}
            onClick={() => handleRowClick(item)}
          >
            {columns.map((column) => (
              <td key={`${item.id}-${column}`}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
