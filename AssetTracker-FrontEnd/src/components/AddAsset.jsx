import { useState } from "react";

export default function DashboardForm({
  postData,
  getData,
  toggleFormVisibility,
}) {
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [pricePaid, setPricePaid] = useState("");
  const [DatePurchased, setDatePurchased] = useState("");
  const [warrantyExpiration, setWarrantyExpiration] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");

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
    await postData(newAsset);
    toggleFormVisibility();
    await getData(sessionStorage.getItem("token"));
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
      <button type="button" onClick={toggleFormVisibility}>
        Cancel
      </button>
    </form>
  );
}
