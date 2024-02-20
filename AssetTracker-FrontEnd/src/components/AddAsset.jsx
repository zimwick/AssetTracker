import { useState } from "react";
import ValidateDollarAmmount from "../utils/ValidateDollarAmount";

export default function DashboardForm({
  postData,
  getData,
  toggleFormVisibility,
}) {
  const [name, setName] = useState("");
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [location, setLocation] = useState("");
  const [serialNumber, setSerialNumber] = useState(null);
  const [pricePaid, setPricePaid] = useState("");
  const [DatePurchased, setDatePurchased] = useState("");
  const [warrantyExpiration, setWarrantyExpiration] = useState(null);
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [priceError, setPriceError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const newAsset = {
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
    };
    if (ValidateDollarAmmount(pricePaid) === false) {
      setPriceError(true);
    } else {
      await postData(newAsset);
      toggleFormVisibility();
      await getData(sessionStorage.getItem("token"));
      console.log(warrantyExpiration);
    }
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
            Make (optional)
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
            Model (optional)
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
            Serial Number (optional)
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
            className={
              priceError
                ? "block text-sm font-medium text-red-700"
                : "block text-sm font-medium text-gray-700"
            }
          >
            Price Paid{" "}
            {priceError && "Error: Price must be in dollar amount e.g. 23.50"}
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
            Warranty Expiration (optional)
          </label>
          <input
            id="warrantyExpiration"
            type="date"
            value={warrantyExpiration}
            onChange={(e) =>
              setWarrantyExpiration(
                e.target.value === "" ? null : e.target.value
              )
            }
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
            type="button"
            onClick={toggleFormVisibility}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition ease-in-out duration-150"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition ease-in-out duration-150"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
