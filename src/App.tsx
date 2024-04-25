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
          inputName="textInput"
          label="Text Input"
          type="text"
          value={textInput}
          onChange={setTextInput}
        />
        <Spacer />
        <Input
          inputName="textInputWithBorder"
          label="Text Input With Border"
          type="text"
          value={textInput}
          onChange={setTextInput}
          border
        />
        <Spacer />
        <Input
          inputName="textInputWithoutFloatingLabel"
          label="Text Input Without Floating Label"
          type="text"
          value={textInput}
          onChange={setTextInput}
          border
          noFloat
        />
        <Spacer />
        <Input
          inputName="searchInput"
          label="Search Input"
          type="search"
          value={searchInput}
          onChange={setSearchInput}
          border
        />
        <Spacer />
        <Input
          inputName="colorInput"
          label="Color Input"
          type="color"
          value={colorInput}
          onChange={setColorInput}
          border
          noFloat
        />
        <Spacer />
        <Input
          inputName="dateInput"
          label="Date Input"
          type="date"
          value={dateInput}
          onChange={setDateInput}
          noFloat
          border
        />
        <Spacer />
        <Input
          inputName="dateTimeInput"
          label="Date Time Input"
          type="datetime-local"
          value={dateTimeInput}
          onChange={setDateTimeInput}
          // noFloat
          border
        />
        <Spacer />
      </div>
    </>
  );
}

export default App;
