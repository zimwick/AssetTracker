import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import { BASE_URL } from "../utils/BaseUrl";
import AssetTable from "../components/AssetTable";
import usePost from "../hooks/usePost";

export default function Dashboard() {
  const navigate = useNavigate();
  const URL_PATH = "Assets";

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

  const {
    getData,
    isLoading: getDataLoading,
    error: getDataError,
    response: getDataResponse,
  } = useGet(BASE_URL, URL_PATH);
  const {
    postData,
    isLoading: postDataLoading,
    error: postDataError,
    response: postDataResponse,
  } = usePost(BASE_URL, URL_PATH);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    getData(sessionStorage.getItem("token"));
  }, [getData]);

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
    await getData(sessionStorage.getItem("token"));
  }

  return (
    <div>
      <div>Dashboard!</div>
      <div>
        <button type="button">Add Asset</button>
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
          <p>Enter date purchased</p>
          <input
            type="date"
            value={DatePurchased}
            onChange={(e) => setDatePurchased(e.target.value)}
            placeholder="Enter date purchased"
          />
          <p>Warranty expiration date</p>
          <input
            type="date"
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
        </form>
        <AssetTable response={getDataResponse} />
      </div>
    </div>
  );
}
