export default function Reporting({
  setReport,
  setShowReporting,
  showReporting,
}) {
  return (
    <div>
      <button type="button" onClick={() => setReport("default")}>
        Reset order
      </button>
      <button type="button" onClick={() => setReport("highest")}>
        Sort by highest price
      </button>
      <button type="button" onClick={() => setReport("expired")}>
        Show expired warranties
      </button>
      <button type="button" onClick={() => setReport("newest")}>
        sort by newest purchase
      </button>
      <button type="button" onClick={() => setReport("owner")}>
        Sort by owner
      </button>
      <button type="button" onClick={() => setShowReporting(!showReporting)}>
        Close
      </button>
    </div>
  );
}
