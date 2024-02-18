import { useRef } from "react";
import { useKey } from "../hooks/useKey";

export default function Search({ query, setQuery, setQueryType, queryType }) {
  const inputEl = useRef(null);

  const handleChange = (e) => {
    setQueryType(e.target.value);
  };

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div className="flex items-center space-x-2 p-4">
      <input
        className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        placeholder="Search assets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      <label
        htmlFor="queryType"
        className="block text-sm font-medium text-gray-700"
      >
        Search by:
      </label>
      <select
        name="queryType"
        id="queryType"
        value={queryType}
        onChange={handleChange}
        className="form-select px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="name">Name</option>
        <option value="make">Make</option>
        <option value="ownerFirstName">Owner First Name</option>
        <option value="ownerLastName">Owner Last Name</option>
        <option value="serialNumber">Serial Number</option>
      </select>
    </div>
  );
}
