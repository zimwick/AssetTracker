import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import { BASE_URL } from "../utils/BaseUrl";
import AssetTable from "../components/AssetTable";
import usePost from "../hooks/usePost"; // Ensure usePost is imported
import AddAsset from "../components/AddAsset";
import AssetDetail from "../components/AssetDetail";
import Reporting from "../components/Reporting";

export default function Dashboard() {
  const navigate = useNavigate();
  const URL_PATH = "Assets";
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [showReporting, setShowReporting] = useState(false);
  const [report, setReport] = useState("default");

  // usePost hook for handling post requests
  const {
    postData,
    isLoading: postDataLoading,
    error: postDataError,
    response: postDataResponse,
  } = usePost(BASE_URL, URL_PATH);

  const {
    getData,
    isLoading: getDataLoading,
    error: getDataError,
    response: getDataResponse,
  } = useGet(BASE_URL, URL_PATH);

  const toggleFormVisibility = () => setShowForm(!showForm);
  const toggleReportingVisibility = () => setShowReporting(!showReporting);

  useEffect(() => {
    if (!sessionStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    getData(sessionStorage.getItem("token"));
  }, [getData]);

  function logout() {
    sessionStorage.clear();
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Logout
          </button>
          {!(showForm || showDetails) && (
            <button
              onClick={toggleFormVisibility}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Asset
            </button>
          )}
          <button
            onClick={toggleReportingVisibility}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            {showReporting ? "Hide" : "Show"} Reporting
          </button>
        </div>
      </header>
      <main className="p-4">
        {postDataError && (
          <p className="text-red-500">Error: {postDataError}</p>
        )}
        {getDataError && <p className="text-red-500">Error: {getDataError}</p>}
        {showReporting && (
          <Reporting
            setReport={setReport}
            setShowReporting={setShowReporting}
            showReporting={showReporting}
          />
        )}
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
        {!showDetails && !showForm && (
          <AssetTable
            response={getDataResponse}
            setShowDetails={setShowDetails}
            report={report}
          />
        )}
      </main>
    </div>
  );
}
