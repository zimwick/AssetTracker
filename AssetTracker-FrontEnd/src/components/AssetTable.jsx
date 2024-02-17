import { useState } from "react";
import styles from "./AssetTable.module.css";

export default function AssetTable({ response, setShowDetails }) {
  const [editRowId, setEditRowId] = useState(null);

  // Assuming all items in `response` have the same structure
  // Exclude 'id' from the columns
  const columns =
    response.length > 0
      ? Object.keys(response[0]).filter((key) => key !== "id")
      : [];

  const handleRowClick = (item) => {
    const newEditRowId = item.id === editRowId ? null : item.id;
    setEditRowId(newEditRowId);
    setShowDetails(newEditRowId ? item : null);
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>
              {column
                .replace(/([A-Z])/g, " $1")
                .trim()
                .replace(/^./, (str) => str.toUpperCase())}{" "}
              {/* Convert camelCase to Title Case */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {response.map((item) => (
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
