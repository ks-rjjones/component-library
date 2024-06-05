import { useState } from "react";
import Button from "src/components/button";
import { BeakerIcon, StarIcon } from "@heroicons/react/24/solid";

export default function ButtonPage() {
  const Spacer = () => <div className="my-2" />;

  const [normalButtonClicks, setNormalButtonClicks] = useState(0);

  return (
    <>
      <h1 className="mb-4 text-start text-2xl">Buttons</h1>
      <div className="max-w-[60%]">
        <div>
          <Button
            text="A Normal Button"
            onClick={() => setNormalButtonClicks(normalButtonClicks + 1)}
          />
          <div>clicked {normalButtonClicks} times</div>
        </div>
        <Spacer />
        <Button text="Button With Left Icon" leftElement={<BeakerIcon />} />
        <Spacer />
        <Button text="Button With Right Icon" rightElement={<BeakerIcon />} />
        <Spacer />
        <Button
          text="Button With Left & Right Icons"
          leftElement={<BeakerIcon />}
          rightElement={<BeakerIcon />}
        />
        <Spacer />
        <Button leftElement={<StarIcon />} />
        <Spacer />
      </div>
    </>
  );
}
