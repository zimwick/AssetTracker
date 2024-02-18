import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to Asset Tracker!</h1>
        <p className="mb-6">
          Track and manage your assets efficiently and effortlessly.
        </p>
        <Link
          to="/login"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
