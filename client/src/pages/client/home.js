import background from "../../assets/images/background4.png";
import SearchBar from "../../components/form/searchBarWhite";
import logo from "../../assets/images/logo.png";
import Card from "../../components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [allTables, setAllTables] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5500/tables")
      .then((res) => res.json())
      .then((data) => setAllTables(data));
  }, []);

  const handleChange = (event) => setSearchTerm(event.target.value);

  const tables = allTables
    .filter((val) => {
      if (!searchTerm) return val;
      return val.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((table) => (
      <Card
        nbFk={table.rowCount}
        tableName={table.name}
        id={table.id}
        key={table.name + table.id}
      />
    ));

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      {/* Header */}
      <div
        className="fixed top-0 w-full h-[200px] z-10 bg-cover bg-left-bottom px-12 lg:px-32 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-20"></span>

        <Link to="/home" className="flex flex-col items-center justify-center z-20">
          <img src={logo} alt="logo" className="h-16" />
          <h2 className="text-3xl font-medium text-white cursor-default tracking-wider">
            TestBench-VS
          </h2>
        </Link>

        {/* Dashboard Button */}
        <Link
          to="/app/dashboard"
          className="mt-4 z-20 px-6 py-2 bg-white text-teal-600 font-semibold rounded-lg shadow hover:bg-teal-100 transition"
        >
          Go to Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-full absolute top-[200px] lg:w-4/5 h-full flex flex-col items-center pt-5">
        <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-x-28 lg:w-3/5 my-5 w-4/5 pb-4">
          <div className="w-4/5 lg:w-4/5 mt-6">
            <SearchBar setVal={handleChange} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap w-5/6 lg:w-11/12 mt-5 p-5">
          {tables}
        </div>
      </div>
    </div>
  );
}
