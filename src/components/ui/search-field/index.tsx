import clsx from "clsx";
import { Search } from "lucide-react";

export interface ISearchFieldProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const SearchField = (props: ISearchFieldProps) => {
  return (
    <div className="flex items-center gap-2 relative">
      <Search size={16} className="opacity-60 absolute left-3" />
      <input
        {...props}
        type="text"
        className={clsx(
          "w-full bg-neutral-100 rounded-full px-4 py-2 outline-none pl-10",
          props.className
        )}
      />
    </div>
  );
};
