import { useState } from "react";
import Input from "src/components/input";

export default function InputPage() {
  const [textInput, setTextInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [fileInput, setFileInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [numberInput, setNumberInput] = useState(0);
  const [decimalInput, setDecimalInput] = useState(0.0);
  const [currencyInput, setCurrencyInput] = useState(0.0);
  const [passwordInput, setPasswordInput] = useState("");
  const [telInput, setTelInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [weekInput, setWeekInput] = useState("");

  const Spacer = () => <div className="my-2" />;

  return (
    <>
      <h1 className="mb-4 text-start text-4xl">Inputs</h1>
      <div className="">
        <Input
          name="textInput"
          label="Text Input"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          style={{ width: "200px" }}
        />
        <Spacer />
        <Input
          name="textInputWithBorder"
          label="Text Input With Border"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          border
        />
        <Spacer />
        <Input
          name="textInputWithoutFloatingLabel"
          label="Text Input Without Floating Label"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          border
          noFloat
        />
        <Spacer />
        <Input
          name="searchInput"
          label="Search Input"
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          border
        />
        <Spacer />
        <Input
          name="colorInput"
          label="Color Input"
          type="color"
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
          border
          // noFloat
        />
        <Spacer />
        <Input
          name="dateInput"
          label="Date Input"
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          name="dateTimeInput"
          label="Date Time Input"
          type="datetime-local"
          value={dateTimeInput}
          onChange={(e) => setDateTimeInput(e.target.value)}
          // noFloat
          border
          helperText="This is a helper text for the date time input."
        />
        <Spacer />
        <Input
          name="emailInput"
          label="Email Input"
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="fileInput"
          label="File Input"
          type="file"
          value={fileInput}
          onChange={(e) => setFileInput(e.target.value)}
          noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="monthInput"
          label="Month Input"
          type="month"
          value={monthInput}
          onChange={(e) => setMonthInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="integerInput"
          label="Integer Input"
          type="number"
          value={numberInput}
          onChange={(e) => setNumberInput(Number(e.target.value))}
          border
        />
        <Spacer />
        <Input
          // hidden
          name="decimalInput"
          label="Decimal Input"
          type="number"
          value={decimalInput}
          onChange={(e) => setDecimalInput(Number(e.target.value))}
          border
          decimalPlaces={2}
        />
        <Spacer />
        <Input
          // hidden
          name="currencyInput"
          label="Currency Input"
          type="number"
          value={currencyInput}
          onChange={(e) => setCurrencyInput(Number(e.target.value))}
          border
          currencyType="USD"
          isCurrency
        />
        <Spacer />
        <Input
          // hidden
          name="passwordInput"
          label="Password Input"
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="telInput"
          label="Tel Input"
          type="tel"
          value={telInput}
          onChange={(e) => setTelInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="timeInput"
          label="Time Input"
          type="time"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="urlInput"
          label="Url Input"
          type="url"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="weekInput"
          label="Week Input"
          type="week"
          value={weekInput}
          onChange={(e) => setWeekInput(e.target.value)}
          // noFloat
          border
        />
        <Spacer />
      </div>
    </>
  );
}
