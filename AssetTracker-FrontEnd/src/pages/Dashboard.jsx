import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import { BASE_URL } from "../utils/BaseUrl";
import AssetTable from "../components/AssetTable";
import usePost from "../hooks/usePost";
import AddAsset from "../components/AddAsset";
import AssetDetail from "../components/AssetDetail";

export default function Dashboard() {
  const navigate = useNavigate();
  const URL_PATH = "Assets";
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

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

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    getData(sessionStorage.getItem("token"));
  }, [getData]);

  return (
    <div>
      <div>Dashboard!</div>
      <div>
        {showForm ||
          (!showDetails && (
            <button type="submit" onClick={toggleFormVisibility}>
              Add Asset
            </button>
          ))}

        {showForm && (
          <AddAsset
            postData={postData}
            getData={getData}
            toggleFormVisibility={toggleFormVisibility}
          />
        )}
        {showDetails && (
          <AssetDetail
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            getData={getData}
          />
        )}
        {!showDetails && (
          <AssetTable
            response={getDataResponse}
            setShowDetails={setShowDetails}
          />
        )}
      </div>
    </div>
  );
}
