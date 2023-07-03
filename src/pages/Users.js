import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../services/api";
import Card from "../components/Card";
import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";

function Users() {
  // states & variable
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pageCount, setpageCount] = useState(0);
  let limit = 12;

  // function for Get Data and Using on useEffect
  const fetchAPI = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getUsers(`?_page=1&_limit=${limit}`);
      setUsers(res.data);
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setError("")
    } catch {
      setError("Somthing went wrong!")
      console.log("Erros");
    }
    setLoading(false);
  }, [limit]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  // fetch Data on pagination
  const fetchUsers = async (currentPage) => {
    const res = await getUsers(`?_page=${currentPage}&_limit=${limit}`);
    const data = await res.data;
    return data;
  };

  // Handle Changing Page
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchUsers(currentPage);
    setUsers(commentsFormServer);

    // scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-2xl ps-3">Users</h1>
        <Link to="/" className=" text-gray-500">
          Back
        </Link>
      </div>
      {error && error}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loading />
        </div>
      ) : (
        <div className="flex justify-center min-h-full mx-auto my-5 gap-5 flex-wrap">
          {users.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
      )}
      <div className="text-center mt-8">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          // breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={
            "isolate inline-flex -space-x-px rounded-md shadow-sm"
          }
          pageClassName={
            "relative inline-flex items-center hover:bg-gray-50 text-gray-900 focus:z-20 focus:outline-offset-0"
          }
          pageLinkClassName={
            "px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 "
          }
          previousClassName={
            "relative inline-flex items-center hover:bg-gray-50 text-gray-900 focus:z-20 focus:outline-offset-0"
          }
          previousLinkClassName={
            "px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 "
          }
          nextClassName={
            "relative inline-flex items-center hover:bg-gray-50 text-gray-900 focus:z-20 focus:outline-offset-0"
          }
          nextLinkClassName={
            "px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 "
          }
          breakClassName={
            "relative inline-flex items-center hover:bg-gray-50 text-gray-900 focus:z-20 focus:outline-offset-0"
          }
          breakLinkClassName={
            "px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 "
          }
          activeClassName={
            "bg-indigo-600 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-indigo-500"
          }
          disabledClassName={"opacity-50 hove:bg-gray-0 focus:none "}
          disabledLinkClassName={"cursor-default"}
        />
      </div>
    </div>
  );
}

export default Users;
