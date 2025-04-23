import { FaBars } from "react-icons/fa";
import { HomeIcon, UserIcon } from '../components/icons';
export default function Header() {
    return (
      <header className="p-4">
        <h1>My Website</h1>
        {/* <FaBars /> 👈 Using the icon here */}
        <HomeIcon width={28} color="#3b82f6" />
      <UserIcon width={28} color="#f43f5e" />
      </header>
    );
  }