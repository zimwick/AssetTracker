import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import { BASE_URL } from "../utils/BaseUrl";
import AssetTable from "../components/AssetTable";

export default function Dashboard() {
  const navigate = useNavigate();
  const URL_PATH = "Assets";

  const { getData, isLoading, error, response } = useGet(BASE_URL, URL_PATH);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    getData(sessionStorage.getItem("token"));
  }, [getData]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div>Dashboard!</div>
      <div>
        <button type="button">Add Asset</button>

        <AssetTable response={response} />
      </div>
    </div>
  );
}
