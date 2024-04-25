/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import React, { useRef } from "react";
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "src/components/css/input.css";
import _ from "lodash";

// TODO: [ ] Add various default error messages.

// TODO: Support for various types
// [x] color
// [x] date
// [x] datetime-local
// [x] email
// [x] file
// [x] hidden
// [x] month
// [x] number
// [x] password
// [x] search // TODO: Needs search icon
// [x] tel
// [x] text
// [ ] time
// [ ] url
// [ ] week

const invalidInputTypes = ["button", "checkbox", "image", "radio", "range", "reset", "submit"];
const inputProps = [
  "label",
  "helperText",
  "errorText",
  "border",
  "noFloat",
  "isInt",
  "isDecimal",
  "isCurrency",
  "setValue",
];

function formatPhoneNumber(phoneNumber: string) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

// Note: Whenever modifying IInputProps, make sure to update the Omit lists in BOTH inputs below.
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  border?: boolean;
  noFloat?: boolean;
  isInt?: boolean;
  isDecimal?: boolean;
  isCurrency?: boolean;
  currencyType?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((p: IInputProps, ref) => {
  if (p.type && invalidInputTypes.includes(p.type.toString())) {
    throw new Error(`Invalid input type: ${p.type}`);
  }

  const inputId = useMemo(() => {
    return `input-${uuidv4()}`;
  }, []);

  const lastChangeEvent = useRef<React.ChangeEvent<HTMLInputElement> | null>(null); // used for manually calling onChange
  const [displayValue, setDisplayValue] = useState<string>(""); // used for number inputs
  const CurrencyFormat = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: p.currencyType || "USD",
    });
  }, [p.currencyType]);

  // TODO: Make units configurable
  const DecimalFormat = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
    });
  }, []);

  const [isFocused, setIsFocused] = useState(false);

  const isColor = useMemo(() => p.type === "color", [p.type]);
  const isDate = useMemo(() => p.type === "date", [p.type]);
  const isDateTime = useMemo(() => p.type === "datetime-local", [p.type]);
  const _isEmail = useMemo(() => p.type === "email", [p.type]);
  const isFile = useMemo(() => p.type === "file", [p.type]);
  const _isHidden = useMemo(() => p.type === "hidden", [p.type]);
  const isMonth = useMemo(() => p.type === "month", [p.type]);
  const isNumber = useMemo(() => p.type === "number", [p.type]);
  const _isPassword = useMemo(() => p.type === "password", [p.type]);
  const isSearch = useMemo(() => p.type === "search", [p.type]);
  const isTel = useMemo(() => p.type === "tel", [p.type]);
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
    return `${p.value || displayValue || isFocused || isColor || isDate || isDateTime || isFile || isMonth ? "translate-y-0.5" : "translate-y-3"}`;
  }, [p.value, displayValue, isFocused, isColor, isDate, isDateTime, isFile, isMonth]);

  const labelSize = useMemo(() => {
    return `${p.value || displayValue || isFocused || isColor || isDate || isDateTime || isFile || isMonth ? "text-xs	" : "text-base"}`;
  }, [p.value, displayValue, isFocused, isColor, isDate, isDateTime, isFile, isMonth]);

  const labelVisibility = useMemo(() => {
    return `${(p.noFloat || isSearch) && "hidden"}`;
  }, [isSearch, p.noFloat]);

  const inputFontSize = useMemo(() => {
    return `${isFile ? "text-xs" : ""}`;
  }, [isFile]);

  const placeHolderStyle = useMemo(() => {
    return `${p.helperText && isSearch && "placeholder:text-stone-400"}`;
  }, [isSearch, p.helperText]);

  const hidden = useMemo(() => {
    return `${p.hidden ? "!hidden !border-transparent" : ""}`;
  }, [p.hidden]);

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
      className={`relative mb-6 items-start rounded border border-transparent px-2 py-0 ${p.border && "!border-primary-500"} ${hidden}`}
    >
      <div className="relative flex flex-col items-start">
        <label
          htmlFor={inputId}
          className={`absolute top-0 w-full ${labelPos} select-none text-start ${labelSize} ${labelVisibility} pointer-events-none leading-none text-stone-400 transition-transform`}
        >
          {p.label}
        </label>
        <div className="flex w-full items-center">
          {isSearch && <SearchIcon />}
          <input
            ref={ref}
            id={inputId}
            hidden={p.hidden || isNumber || isTel}
            value={isColor && !p.value ? "#000000" : p.value}
            placeholder={p.noFloat || isSearch ? p.label : ""}
            className={`my-0 ${inputPadding} ${inputSize} outline-none ${placeHolderStyle} ${inputFontSize} ${p.className}`}
            min={isNumber ? p.min || 0 : undefined}
            onBlur={(e) => {
              setIsFocused(false);
              p.onBlur && p.onBlur(e);
            }}
            onChange={(e) => {
              p.onChange && p.onChange(e);
            }}
            onFocus={(e) => {
              setIsFocused(true);
              p.onFocus && p.onFocus(e);
            }}
            onKeyDown={(e) => {
              // TODO: Handle Enter key press. If the form is complete, submit the form. If the form is incomplete,
              // TODO: focus the next required input.
              p.onKeyDown && p.onKeyDown(e);
            }}
            onWheel={(e) => {
              e.currentTarget.blur(); // prevent scrolling from changing the input
              p.onWheel && p.onWheel(e);
            }}
            {..._.omit(p, [
              ...inputProps,
              "className",
              "currencyType",
              "hidden",
              "min",
              "onBlur", // must remove props and manually merge behavior above
              "onChange", // if not, the default behavior will never be called
              "onFocus",
              "onKeyDown",
              "onWheel",
              "placeholder",
              "value",
            ])}
          />
          <input
            id={`${inputId}-display`}
            hidden={!isNumber && !isTel}
            value={displayValue}
            placeholder={p.noFloat || isSearch ? p.label : ""}
            className={`my-0 ${inputPadding} ${inputSize} outline-none ${placeHolderStyle} ${inputFontSize} ${p.className}`}
            min={isNumber ? p.min || 0 : undefined}
            onBlur={(e) => {
              setIsFocused(false);

              if (isNumber) {
                if (p.onChange && lastChangeEvent.current) {
                  lastChangeEvent.current.target.value = e.target.value;
                  p.onChange(lastChangeEvent.current);
                }
                if (p.isCurrency) {
                  const nv = CurrencyFormat.format(Number(e.target.value));
                  setDisplayValue(nv);
                } else if (p.isDecimal) {
                  const nv = DecimalFormat.format(Number(e.target.value));
                  setDisplayValue(nv);
                }
              } else if (isTel) {
                e.target.value = e.target.value.replace(/[^0-9]/g, "").trim();
                if (p.onChange && lastChangeEvent.current) {
                  lastChangeEvent.current.target.value = e.target.value;
                  p.onChange(lastChangeEvent.current);
                }
                const nv = formatPhoneNumber(e.target.value);
                // TODO: If format returns null, display error message
                setDisplayValue(nv || e.target.value);
              }

              p.onBlur && p.onBlur(e);
            }}
            onChange={(e) => {
              lastChangeEvent.current = e;
              if (isNumber) {
                if (p.isInt) {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                } else if (p.isCurrency || p.isDecimal) {
                  e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                }
              } else if (isTel) {
                e.target.value = e.target.value.replace(/[^0-9()+-]/g, "");
              }
              setDisplayValue(e.target.value);
            }}
            onFocus={(e) => {
              console.log("FOCUSED");
              setIsFocused(true);
              p.onFocus && p.onFocus(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.currentTarget.blur();
              p.onKeyDown && p.onKeyDown(e);
            }}
            onWheel={(e) => {
              e.currentTarget.blur(); // prevent scrolling from changing the input
              p.onWheel && p.onWheel(e);
            }}
            type="text"
            {..._.omit(p, [
              ...inputProps,
              "className",
              "currencyType",
              "hidden",
              "min",
              "onBlur", // must remove props and manually merge behavior above
              "onChange", // if not, the default behavior will never be called
              "onFocus",
              "onKeyDown",
              "onWheel",
              "placeholder",
              "type",
              "value",
            ])}
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
});

export default Input;
