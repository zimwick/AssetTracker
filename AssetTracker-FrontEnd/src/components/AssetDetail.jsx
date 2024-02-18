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
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="make"
            className="block text-sm font-medium text-gray-700"
          >
            Make
          </label>
          <input
            id="make"
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Enter product make"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Model */}
        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <input
            id="model"
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Enter product model"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter product location"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Serial Number */}
        <div>
          <label
            htmlFor="serialNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Serial Number
          </label>
          <input
            id="serialNumber"
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Enter serial number"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Price Paid */}
        <div>
          <label
            htmlFor="pricePaid"
            className="block text-sm font-medium text-gray-700"
          >
            Price Paid
          </label>
          <input
            id="pricePaid"
            type="text"
            value={pricePaid}
            onChange={(e) => setPricePaid(e.target.value)}
            placeholder="Enter price paid"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Date Purchased */}
        <div>
          <label
            htmlFor="datePurchased"
            className="block text-sm font-medium text-gray-700"
          >
            Date Purchased
          </label>
          <input
            id="datePurchased"
            type="date"
            value={DatePurchased}
            onChange={(e) => setDatePurchased(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Warranty Expiration */}
        <div>
          <label
            htmlFor="warrantyExpiration"
            className="block text-sm font-medium text-gray-700"
          >
            Warranty Expiration
          </label>
          <input
            id="warrantyExpiration"
            type="date"
            value={warrantyExpiration}
            onChange={(e) => setWarrantyExpiration(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Owner First Name */}
        <div>
          <label
            htmlFor="ownerFirstName"
            className="block text-sm font-medium text-gray-700"
          >
            Owner's First Name
          </label>
          <input
            id="ownerFirstName"
            type="text"
            value={ownerFirstName}
            onChange={(e) => setOwnerFirstName(e.target.value)}
            placeholder="Enter owner's first name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Owner Last Name */}
        <div>
          <label
            htmlFor="ownerLastName"
            className="block text-sm font-medium text-gray-700"
          >
            Owner's Last Name
          </label>
          <input
            id="ownerLastName"
            type="text"
            value={ownerLastName}
            onChange={(e) => setOwnerLastName(e.target.value)}
            placeholder="Enter owner's last name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition ease-in-out duration-150"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => handleDelete()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition ease-in-out duration-150"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => setShowDetails(false)}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition ease-in-out duration-150"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
