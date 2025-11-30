import { useState } from "react";
import SearchBar from "../SearchBar";

export default function SearchBarExample() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="p-6 bg-background">
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        onSearch={() => console.log("Searching for:", searchValue)}
      />
    </div>
  );
}
