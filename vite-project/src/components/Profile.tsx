import { FaUserCircle } from "react-icons/fa";
import "./Profile.css";

type ProfileProps = {
  name: string;
  role: string;
};

export default function Profile({ name, role }: ProfileProps) {
  return (
    <div className="profile-card">
      <FaUserCircle className="profile-icon" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
