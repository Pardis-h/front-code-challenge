import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen container mx-auto p-5 font-poppins ">
      <header className="mb-12 flex justify-between items-center">
        <Link to="/" className="flex gap-1 items-center">
          <img className={" w-14"} src="/sibtorsh-logo.svg" alt="logo" />
          <span className="text-green-700 font-bold">SibTorsh</span>
        </Link>
        <nav className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/dashboard/users">Users</Link>
        </nav>
      </header>
      {children}
      <footer className="text-center mt-20 text-gray-500 text-sm">
        Pardis Haghdoust | Front Code Challenge | SibTorsh
      </footer>
    </div>
  );
}

export default Layout;
