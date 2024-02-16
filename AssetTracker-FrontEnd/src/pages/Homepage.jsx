import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to Asset Tracker!</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}