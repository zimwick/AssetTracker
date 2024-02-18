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
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search assets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      <label htmlFor="queryType">Search by:</label>
      <select
        name="queryType"
        id="queryType"
        value={queryType}
        onChange={handleChange}
      >
        <option value="name">Name</option>
        <option value="make">Make</option>
        <option value="ownerFirst">Owner First Name</option>
        <option value="ownerLast">Owner Last Name</option>
        <option value="serial">Serial Number</option>
      </select>
    </div>
  );
}
