import "./App.css";
import { useState } from "react";
import Checkbox from "src/components/Checkbox";
import Input from "src/components/Input";

function App() {
  const [checkbox, setCheckbox] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [fileInput, setFileInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [numberInput, setNumberInput] = useState(0);
  const [passwordInput, setPasswordInput] = useState("");
  const [telInput, setTelInput] = useState("");

  const Spacer = () => <div className="my-2" />;

  return (
    <>
      <h1 className="text-start">Checkboxes</h1>
      <div className="max-w-[60%]">
        <Checkbox label="Checkbox" checked={checkbox} onChange={setCheckbox} />
        <Spacer />
        <Checkbox label="Checkbox with a border" checked={checkbox} onChange={setCheckbox} border />
        <Spacer />
        <Checkbox
          label="Checkbox with subtext"
          checked={checkbox}
          onChange={setCheckbox}
          subtext="This is subtext about this checkbox."
        />
        <Spacer />
        <Checkbox
          label="Checkbox with subtext and a border"
          checked={checkbox}
          onChange={setCheckbox}
          subtext="This is subtext about this checkbox. Also has a border."
          border
        />
        <Spacer />
      </div>
      <br />
      <hr />
      <br />
      <h1 className="text-start">Inputs</h1>
      <div className="max-w-[60%]">
        <Input
          name="textInput"
          label="Text Input"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
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
          noFloat
          border
        />
        <Spacer />
        <Input
          // hidden
          name="numberInput"
          label="Number Input"
          type="number"
          value={numberInput}
          onChange={(e) => setNumberInput(Number(e.target.value))}
          // noFloat
          border
          isDecimal
          step={0.01}
        />
        <Spacer />
        <Input
          // hidden
          name="passwordInput"
          label="Password Input"
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          noFloat
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
      </div>
    </>
  );
}

export default App;
