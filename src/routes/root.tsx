import { Link, Outlet } from "react-router-dom";
import Input from "src/components/input";

export default function Root() {
  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex flex-none flex-col items-center gap-2 bg-tertiary-200 p-2">
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
              <Link to={`/components/button`}>Button</Link>
            </li>
            <li>
              <Link to={`/components/checkbox`}>Checkbox</Link>
            </li>
            <li>
              <Link to={`/components/input`}>Input</Link>
            </li>
            <li>
              <Link to={`/components/list`}>List</Link>
            </li>
            <li>
              <Link to={`/components/form`}>Form Example</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex w-full flex-col overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}
