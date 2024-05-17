// This lint ignore is to allow negative values (e.g. after:checked:translate-y-[-50%])
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ICheckboxProps {
  label: string;
  checked: boolean;
  subtext?: string;
  border?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox(p: ICheckboxProps) {
  const checkboxId = useMemo(() => {
    return `checkbox-${uuidv4()}`;
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  // Note: Allow the component to control the value so we can use
  // a div to capture the onClick event (bigger click area).
  const [isChecked, setIsChecked] = useState(p.checked);
  useEffect(() => {
    p.onChange && p.onChange(isChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        setIsChecked(!isChecked);
      }}
      className={`w-fit items-start rounded p-2 ${p.border ? `border-2 ${isHovered ? "border-tertiary-600" : "border-tertiary-500"}` : "border-2 border-transparent"}`}
    >
      <div className="flex items-center">
        <input
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          className={`relative block size-5 appearance-none rounded border-0 checked:!border-primary checked:!bg-primary after:checked:absolute after:checked:left-1/2 after:checked:top-[40%] after:checked:h-3/5 after:checked:w-[30%] after:checked:translate-x-[-45%] after:checked:translate-y-[-50%] after:checked:rotate-45 after:checked:border-b-2 after:checked:border-r-2 after:checked:border-tertiary-800 ${isHovered ? "bg-tertiary-500" : "bg-tertiary-400"}`}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label
          htmlFor={checkboxId}
          className="w-full cursor-default select-none ps-1 text-start leading-none"
        >
          {p.label}
        </label>
      </div>
      {p.subtext && (
        <p className="ml-6 cursor-default select-none text-left text-xs text-tertiary-600">
          {p.subtext}
        </p>
      )}
    </div>
  );
}
