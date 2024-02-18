export default function Reporting({
  setReport,
  setShowReporting,
  showReporting,
}) {
  return (
    <div className="flex flex-row items-center justify-center space-x-2 mt-4">
      <button
        type="button"
        onClick={() => setReport("default")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out"
      >
        Reset order
      </button>
      <button
        type="button"
        onClick={() => setReport("highest")}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-150 ease-in-out"
      >
        Sort by highest price
      </button>
      <button
        type="button"
        onClick={() => setReport("expired")}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-150 ease-in-out"
      >
        Show expired warranties
      </button>
      <button
        type="button"
        onClick={() => setReport("newest")}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-150 ease-in-out"
      >
        Sort by newest purchase
      </button>
      <button
        type="button"
        onClick={() => setReport("owner")}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-150 ease-in-out"
      >
        Sort by owner
      </button>
      <button
        type="button"
        onClick={() => setShowReporting(!showReporting)}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-150 ease-in-out"
      >
        Close
      </button>
    </div>
  );
}
