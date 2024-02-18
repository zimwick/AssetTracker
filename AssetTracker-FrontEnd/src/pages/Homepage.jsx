import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div>
      <h1>Welcome to Asset Tracker!</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
