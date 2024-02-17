import { useState } from "react";
import styles from "./AssetTable.module.css";

export default function AssetTable({ response, setShowDetails }) {
  const [editRowId, setEditRowId] = useState(null);

  // Handler to toggle edit mode for a row
  const handleRowClick = (item) => {
    const newEditRowId = item.id === editRowId ? null : item.id;
    setEditRowId(newEditRowId);

    // Check if we're setting a row to edit mode, then pass the item to setShowDetails
    if (newEditRowId !== null) {
      setShowDetails(item); // Pass the entire item object
    } else {
      setShowDetails(null); // Reset or pass a default state when no row is in edit mode
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Make</th>
          <th>Model</th>
          <th>Location</th>
          <th>Serial Number</th>
          <th>Price Paid</th>
          <th>Date Purchased</th>
          <th>Warranty Expiration</th>
          <th>Owner First Name</th>
          <th>Owner Last Name</th>
        </tr>
      </thead>
      <tbody>
        {response.map((item) => (
          <tr
            className={`${styles.tr}`}
            key={item.id}
            onClick={() => handleRowClick(item)}
          >
            <td>{item.name}</td>
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>{item.location}</td>
            <td>{item.serialNumber}</td>
            <td>{item.pricePaid}</td>
            <td>{item.datePurchased}</td>
            <td>{item.warrantyExpiration}</td>
            <td>{item.ownerFirstName}</td>
            <td>{item.ownerLastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
