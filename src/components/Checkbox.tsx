/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useMemo } from "react";
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

  return (
    <div
      className={`items-start rounded border p-2 ${p.border ? "border-primary-500" : "border-transparent"}`}
    >
      <div className="flex items-center">
        <input
          id={checkboxId}
          type="checkbox"
          checked={p.checked}
          className="relative block size-5 appearance-none rounded border-0 bg-tertiary-400 checked:!border-primary checked:!bg-primary after:checked:absolute after:checked:left-1/2 after:checked:top-[40%] after:checked:h-3/5 after:checked:w-[30%] after:checked:translate-x-[-45%] after:checked:translate-y-[-50%] after:checked:rotate-45 after:checked:border-b-2 after:checked:border-r-2 after:checked:border-tertiary-800 hover:bg-primary-200"
          onChange={(e) => p.onChange && p.onChange(e.target.checked)}
        />
        <label htmlFor={checkboxId} className="w-full select-none ps-1 text-start leading-none">
          {p.label}
        </label>
      </div>
      {p.subtext && <p className="ml-6 text-left text-xs text-tertiary-600">{p.subtext}</p>}
    </div>
  );
}
