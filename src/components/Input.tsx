/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "src/components/css/input.css";

// TODO: Support for various types
// [x] color
// [x] date
// [x] datetime-local
// [x] email
// [x] file
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

  const isColor = useMemo(() => p.type === "color", [p.type]);
  const isDate = useMemo(() => p.type === "date", [p.type]);
  const isDateTime = useMemo(() => p.type === "datetime-local", [p.type]);
  const _isEmail = useMemo(() => p.type === "email", [p.type]);
  const isFile = useMemo(() => p.type === "file", [p.type]);
  const _isHidden = useMemo(() => p.type === "hidden", [p.type]);
  const _isMonth = useMemo(() => p.type === "month", [p.type]);
  const _isNumber = useMemo(() => p.type === "number", [p.type]);
  const _isPassword = useMemo(() => p.type === "password", [p.type]);
  const isSearch = useMemo(() => p.type === "search", [p.type]);
  const _isTel = useMemo(() => p.type === "tel", [p.type]);
  const _isText = useMemo(() => p.type === "text", [p.type]);
  const _isTime = useMemo(() => p.type === "time", [p.type]);
  const _isUrl = useMemo(() => p.type === "url", [p.type]);
  const _isWeek = useMemo(() => p.type === "week", [p.type]);

  const inputPadding = useMemo(() => {
    if (isColor) return p.noFloat ? "my-1 !p-0" : "mt-4 !p-0 mb-0.5";
    if (isFile) return p.noFloat ? "py-1.5" : "pt-5 pb-0.5";
    if (p.noFloat || isSearch) return "py-1.5";
    return "pt-4";
  }, [isColor, isFile, isSearch, p.noFloat]);

  const inputSize = useMemo(() => {
    return `${isColor ? "size-6" : "w-full"}`;
  }, [isColor]);

  const labelPos = useMemo(() => {
    return `${p.value || isFocused || isColor || isDate || isDateTime || isFile ? "translate-y-0.5" : "translate-y-3"}`;
  }, [p.value, isFocused, isColor, isDate, isDateTime, isFile]);

  const labelSize = useMemo(() => {
    return `${(p.value || isFocused || isColor || isDate || isDateTime, isFile ? "text-xs	" : "text-base")}`;
  }, [p.value, isFocused, isColor, isDate, isDateTime, isFile]);

  const labelVisibility = useMemo(() => {
    return `${(p.noFloat || isSearch) && "hidden"}`;
  }, [isSearch, p.noFloat]);

  const inputFontSize = useMemo(() => {
    return `${isFile ? "text-xs" : ""}`;
  }, [isFile]);

  const placeHolderStyle = useMemo(() => {
    return `${p.helperText && isSearch && "placeholder:text-stone-400"}`;
  }, [isSearch, p.helperText]);

  const SearchIcon = () => {
    return (
      <div className="mr-2 flex items-center">
        <svg
          className="size-5"
          aria-labelledby="title desc"
          role="img"
          xmlns=""
          viewBox="0 0 19.9 19.7"
        >
          <title id="title">Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g className="stroke-stone-600" fill="none">
            <path d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div
      className={`relative mb-6 items-start rounded border border-transparent px-2 py-0 ${p.border && "!border-primary-500"}`}
    >
      <div className="relative flex flex-col items-start">
        <label
          htmlFor={inputId}
          className={`absolute top-0 w-full ${labelPos} select-none text-start ${labelSize} ${labelVisibility} leading-none text-stone-400 transition-transform`}
        >
          {p.label}
        </label>
        <div className="flex w-full items-center">
          {isSearch && <SearchIcon />}
          <input
            id={inputId}
            type={p.type as string}
            value={isColor && !p.value ? "#000000" : p.value}
            placeholder={p.noFloat || isSearch ? p.label : ""}
            className={`my-0 ${inputPadding} ${inputSize} outline-none ${placeHolderStyle} ${inputFontSize}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              if (p.onChange) {
                // TODO: Logic for modify the value depending on the type.
                p.onChange(e.target.value);
              }
            }}
          />
          {isColor && (
            <span className={`${p.noFloat ? "my-1 ml-1" : "ml-1 mt-4"}`}>
              {p.value || "#000000"}
            </span>
          )}
        </div>
      </div>
      {!p.border && <hr className="border-primary" />}
      {p.errorText && (
        <p className="absolute bottom-[] text-left text-xs text-red-600">{p.errorText}</p>
      )}
      {p.helperText && (
        <p className="absolute bottom-[] text-left text-xs text-tertiary-600">{p.helperText}</p>
      )}
    </div>
  );
}
