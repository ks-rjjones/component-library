/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "src/components/css/input.css";

// TODO: Support for various types
// [ ] color
// [ ] date
// [ ] datetime-local
// [ ] email
// [ ] file
// [ ] hidden
// [ ] month
// [ ] number
// [ ] password
// [x] search // TODO: Needs search icon
// [ ] tel
// [x] text
// [ ] time
// [ ] url
// [ ] week

export interface IInputProps {
  inputName: string;
  label: string;
  value: string;
  type: Omit<
    React.HTMLInputTypeAttribute,
    "button" | "checkbox" | "image" | "radio" | "range" | "reset" | "submit"
  >;
  helperText?: string;
  errorText?: string;
  border?: boolean;
  noFloat?: boolean;
  onChange?: (value: string) => void;
}

export default function Input(p: IInputProps) {
  const inputId = useMemo(() => {
    return `input-${uuidv4()}`;
  }, []);

  const [isFocused, setIsFocused] = useState(false);

  const searchFont = useMemo(() => {
    return `${p.helperText && p.type === "search" && "placeholder:italic placeholder:text-slate-400"}`;
  }, [p.helperText, p.type]);

  const searchPadding = useMemo(() => {
    return `${p.noFloat || p.type === "search" ? "py-1" : "pt-2"}`;
  }, [p.noFloat, p.type]);

  const labelPos = useMemo(() => {
    return `${p.value || isFocused ? "translate-y-0" : "translate-y-2"}`;
  }, [p.value, isFocused]);

  const labelSize = useMemo(() => {
    return `${p.value || isFocused ? "text-xs	" : "text-base"}`;
  }, [p.value, isFocused]);

  const labelVisibility = useMemo(() => {
    return `${(p.noFloat || p.type === "search") && "hidden"}`;
  }, [p.noFloat, p.type]);

  return (
    <div
      className={`items-start rounded border border-transparent px-2 py-0 ${p.border && "!border-primary-500"}`}
    >
      <div className="relative flex flex-col items-start">
        <label
          htmlFor={inputId}
          className={`absolute top-0 w-full ${labelPos} select-none text-start ${labelSize} ${labelVisibility} leading-none text-slate-400 transition-transform`}
        >
          {p.label}
        </label>
        <input
          id={inputId}
          type={p.type as string}
          value={p.value}
          placeholder={p.noFloat || p.type === "search" ? p.label : ""}
          className={`my-0 w-full ${searchPadding} outline-none ${searchFont}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => {
            if (p.onChange) {
              // TODO: Logic for modify the value depending on the type.
              p.onChange(e.target.value);
            }
          }}
        />
      </div>
      {!p.border && <hr />}
      {/* TODO: Handle error state and text */}
      {p.helperText && <p className="ml-6 text-left text-xs text-tertiary-600">{p.helperText}</p>}
    </div>
  );
}
