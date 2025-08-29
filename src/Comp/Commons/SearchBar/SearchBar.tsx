import { Input } from "@/components/ui/input";
import { DarkModeContext } from "@/context/darkModeContext/darkModeContext";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used inside DarkModeProvider");
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <>
      <div className="relative w-full">
        <CiSearch
          className={`absolute left-3 top-1/2 -translate-y-1/2  ${
            isDarkMode ? "text-black" : "text-gray-400"
          }`}
          size={20}
        />
        <input
          type="text"
          placeholder="Search"
          className={`w-full pl-10 pr-4 py-2  ${
            isDarkMode ? "text-black" : "text-white"
          } rounded-full border-1  ${
            isDarkMode ? "border-black" : "border-white/30"
          }`}
        />
      </div>
    </>
  );
};

export default SearchBar;
