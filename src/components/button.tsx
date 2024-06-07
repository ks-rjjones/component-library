import _ from "lodash";
import React, { useMemo, useState } from "react";

// TODO
// [X] Icon button (icon only, start icon, end icon)
// [ ] Default styling options (outlined, filled, text)

// Used for typing the button component
const inputProps = ["text", "leftElement", "rightElement"];

// IMPORTANT: Whenever modifying IButtonProps, you must update the Omit lists in the button element
// below. You will also need to update the inputProps list above.
export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((p: IButtonProps, ref) => {
  const buttonId = useMemo(() => _.uniqueId("ui-button-"), []);

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const border = useMemo(() => {
    return isClicked ? "border-2 border-primary-600" : "border-2 border-transparent";
  }, [isClicked]);

  const bgColor = useMemo(() => {
    return "bg-primary-500";
  }, []);

  const textColor = useMemo(() => {
    return "text-primary-100";
  }, []);

  const shadow = useMemo(() => {
    return isHovered ? (isClicked ? "shadow-lg" : "shadow-md") : "shadow-sm";
  }, [isClicked, isHovered]);

  const brightness = useMemo(() => {
    return isHovered ? "brightness-105" : "";
  }, [isHovered]);

  return (
    <button
      ref={ref}
      id={buttonId}
      className={`w-fit rounded ${border} ${bgColor} p-2 ${textColor} ${shadow} ${brightness} ${p.className}`}
      // className={`w-fit rounded border-2 bg-primary-500 px-4 py-2 text-primary-100 shadow-sm`}
      onBlur={(e) => {
        setIsHovered(false);
        p.onBlur && p.onBlur(e);
      }}
      onMouseDown={(e) => {
        setIsClicked(true);
        p.onMouseDown && p.onMouseDown(e);
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        p.onMouseEnter && p.onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        p.onMouseLeave && p.onMouseLeave(e);
      }}
      onMouseUp={(e) => {
        setIsClicked(false);
        p.onMouseUp && p.onMouseUp(e);
      }}
      // IMPORTANT: Must omit props that
      // 1. Must have funcitonality in this component as well as a callback (above)
      // 2. Are not button props
      {..._.omit(p, [
        ...inputProps,
        "className",
        "onBlur",
        "onMouseDown",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseUp",
      ])}
    >
      <div className="flex items-center">
        {p.leftElement && (
          <div className="flex min-w-[24px] flex-none justify-center">{p.leftElement}</div>
        )}
        {p.text && <div className="mx-2 flex grow justify-center">{p.text}</div>}
        {p.rightElement && (
          <div className="flex min-w-[24px] flex-none justify-center">{p.rightElement}</div>
        )}
      </div>
    </button>
  );
});

export default Button;
