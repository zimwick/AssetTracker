import { useState } from "react";
import { BASE_URL } from "../utils/BaseUrl";

export default function AssetDetail({ showDetails, setShowDetails, getData }) {
  const [name, setName] = useState(showDetails.name);
  const [make, setMake] = useState(showDetails.make);
  const [model, setModel] = useState(showDetails.model);
  const [location, setLocation] = useState(showDetails.location);
  const [serialNumber, setSerialNumber] = useState(showDetails.serialNumber);
  const [pricePaid, setPricePaid] = useState(showDetails.pricePaid);
  const [DatePurchased, setDatePurchased] = useState(showDetails.datePurchased);
  const [warrantyExpiration, setWarrantyExpiration] = useState(
    showDetails.warrantyExpiration
  );
  const [ownerFirstName, setOwnerFirstName] = useState(
    showDetails.ownerFirstName
  );
  const [ownerLastName, setOwnerLastName] = useState(showDetails.ownerLastName);

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedAsset = {
      name,
      make,
      model,
      location,
      serialNumber,
      pricePaid,
      DatePurchased,
      warrantyExpiration,
      ownerFirstName,
      ownerLastName,
      id: showDetails.id,
    };
    try {
      const response = await fetch(`${BASE_URL}/ASSETS/${showDetails.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedAsset),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if the response has content before parsing it as JSON
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Success:", data);
        // Handle success, e.g., show a message to the user or update the UI
      } else {
        // Handle no content
        console.log("Request was successful, but no content returned.");
        // You might want to update UI or state to reflect the successful update
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle errors, e.g., show an error message to the user
    }
    await getData(sessionStorage.getItem("token"));
    setShowDetails(false);
  }

  async function handleDelete() {
    try {
      const response = await fetch(`${BASE_URL}/ASSETS/${showDetails.id}`, {
        method: "DELETE", // Specify the method to use
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        // No need to send a body with a DELETE request typically
      });

      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Optionally, handle the response data
      // const data = await response.json();
      // console.log('Delete successful', data);

      // Perform any follow-up actions after deletion
      // For example, updating the UI or fetching the current list of items
      console.log("Delete successful");
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors, such as showing an error message to the user
    }
    await getData(sessionStorage.getItem("token"));
    setShowDetails(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
      />
      <input
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Enter product make"
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Enter product model"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter product location"
      />
      <input
        type="text"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
        placeholder="Enter serial number"
      />
      <input
        type="text"
        value={pricePaid}
        onChange={(e) => setPricePaid(e.target.value)}
        placeholder="Enter price paid"
      />
      <br />
      <label htmlFor="datepurchased">Enter date purchased</label>
      <br />
      <input
        type="date"
        id="datepurchased"
        value={DatePurchased}
        onChange={(e) => setDatePurchased(e.target.value)}
        placeholder="Enter date purchased"
      />
      <br />
      <label htmlFor="warrantyexpiration">Warranty expiration date</label>
      <br />
      <input
        type="date"
        id="warrantyexpiration"
        value={warrantyExpiration}
        onChange={(e) => setWarrantyExpiration(e.target.value)}
        placeholder="warranty expiration date"
      />
      <input
        type="text"
        value={ownerFirstName}
        onChange={(e) => setOwnerFirstName(e.target.value)}
        placeholder="Product owners first name"
      />
      <input
        type="text"
        value={ownerLastName}
        onChange={(e) => setOwnerLastName(e.target.value)}
        placeholder="Product owners last name"
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={() => handleDelete()}>
        Delete
      </button>
      <button type="button" onClick={() => setShowDetails(false)}>
        Cancel
      </button>
    </form>
  );
}
