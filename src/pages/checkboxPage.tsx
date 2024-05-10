import { useState } from "react";
import Checkbox from "src/components/checkbox";

export default function CheckboxPage() {
  const [checkbox, setCheckbox] = useState(false);

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
    </>
  );
}
