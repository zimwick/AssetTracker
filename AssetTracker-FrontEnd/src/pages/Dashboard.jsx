import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import { BASE_URL } from "../utils/BaseUrl";
import AssetTable from "../components/AssetTable";
import usePost from "../hooks/usePost";
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

  const { postData } = usePost(BASE_URL, URL_PATH);
  const { getData, response: getDataResponse } = useGet(BASE_URL, URL_PATH);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
    if (showForm === false) {
      setShowReporting(false);
    }
  };

  function handleClearPage() {
    setShowDetails(false);
    setShowForm(false);
    setShowReporting(false);
  }

  const handleShowDetails = (details) => {
    setShowDetails(details);
    if (details !== null) {
      setShowReporting(false);
    }
  };

  // Correctly defined toggleReportingVisibility function
  const toggleReportingVisibility = () => {
    setShowReporting(!showReporting);
    // Optionally, hide other UI elements when showing reporting
    if (showReporting === false) {
      setShowForm(false);
      setShowDetails(null);
    }
  };

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
        <h1
          onClick={() => handleClearPage()}
          className="text-xl font-semibold cursor-pointer hover"
        >
          Dashboard
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          {!showDetails && (
            <button
              onClick={toggleFormVisibility}
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                showForm ? "hidden" : ""
              }`}
            >
              Add Asset
            </button>
          )}
          {!showForm && !showDetails && (
            <button
              onClick={toggleReportingVisibility}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              {showReporting ? "Hide" : "Show"} Reporting
            </button>
          )}
        </div>
      </header>
      <main className="p-4">
        {showReporting && (
          <Reporting
            setReport={setReport}
            setShowReporting={setShowReporting}
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
            setShowDetails={handleShowDetails}
            getData={getData}
          />
        )}
        {!showDetails && !showForm && (
          <AssetTable
            response={getDataResponse}
            setShowDetails={handleShowDetails}
            report={report}
          />
        )}
      </main>
    </div>
  );
}
