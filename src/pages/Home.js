import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" flex flex-col items-center max-h-full md:h-96 ">
      <div className="flex items-center mb-5">
        <img className={"w-14 md:w-48 animate-pulse"} src="/sibtorsh-logo.svg" alt="" />
        <span className={"font-bold text-lg text-center md:text-2xl xl:text-5xl text-green-700 "}>
          Welcome to Sibtorsh code challenge
        </span>
        <img className={"w-14 md:w-48 animate-pulse"} src="/sibtorsh-logo.svg" alt="" />
      </div>
      <Link to="/dashboard/users" className="bg-green-700 text-white font-semibold py-2 px-4 mt-5 rounded"> See All Users </Link>
    </div>
  );
}

export default Home;
