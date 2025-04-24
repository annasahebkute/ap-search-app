import { FaBars } from "react-icons/fa";
import { HomeIcon, SearchHistoryIcon } from '../components/icons';
// import OtowLogo from '../public/Otow-log.svg'; 

export default function Header() {
    return (
      <header className="p-4 bg-white">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div>
            <img src="/Otow-log.svg" alt="Otow Logo" width={100} />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <SearchHistoryIcon width={28} color="#3b82f6" className="cursor-pointer"/>
            </button>
            <div className="flex flex-row gap-3 items-center">
              <img src="/userAvtar.png" alt="Otow Logo" width={36} />
              <span className="text-sm">David Brown</span>
            </div>
          </div>
        </div>
      </header>
    );
  }