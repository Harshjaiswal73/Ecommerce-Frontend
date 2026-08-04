import {
  Bell,
  Moon,
  Search
} from "lucide-react";

function Navbar() {

   const name = localStorage.getItem("firstname");

  return (
    <nav className="bg-white border-b h-16 flex items-center justify-between px-6">

      <div className="relative hidden md:block">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="border rounded-xl pl-10 pr-4 py-2 w-80"
        />
      </div>

      <div className="flex items-center gap-4">

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          + New Order
        </button>

        <Moon size={20} />

        <Bell size={20} />

        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          {name}
        </div>

      </div>

    </nav>
  );
}
export default Navbar;