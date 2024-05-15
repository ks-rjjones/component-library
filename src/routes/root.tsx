import { Outlet } from "react-router-dom";
import Input from "src/components/input";

export default function Root() {
  return (
    <div className="flex h-full">
      <div className="flex flex-none flex-col items-center gap-2 p-2">
        <h1>Component Library</h1>
        <div className="flex">
          <form id="search-form" role="search">
            <Input label="Search Components" type="search" noFloat border />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav className="flex flex-col">
          <ul>
            <li>
              <a href={`/components/checkbox`}>Checkbox</a>
            </li>
            <li>
              <a href={`/components/input`}>Input</a>
            </li>
            <li>
              <a href={`/components/list`}>List</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex w-full flex-col">
        <Outlet />
      </div>
    </div>
  );
}
