import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Search for medicines, health products...",
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="relative flex gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
        <Input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-16 pl-14 pr-12 text-xl border-2 focus:border-primary"
          data-testid="input-search"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10"
            onClick={() => onChange("")}
            data-testid="button-clear-search"
          >
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>
      <Button
        className="h-16 px-8 text-xl font-semibold"
        onClick={onSearch}
        data-testid="button-search"
      >
        Search
      </Button>
    </div>
  );
}
