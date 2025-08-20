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

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const tables = allTables
    // eslint-disable-next-line
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((table) => (
      <Card
        nbFk={table.rowCount}
        tableName={table.name}
        id={table.id}
        key={table.name + "" + table.id}
      />
    ));

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col ">
      <div
        className="fixed h-1/5 top-0  w-full h-80px z-10 m-0 bg-cover bg-left-bottom  px-12 bg-gradient-to-r from-teal-400 to-orange-300 lg:px-32 flex items-center justify-center flex-col "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <span className="absolute top-0 left-0 m-0 p-0 bg-gray-700 opacity-20   w-full h-full "></span>
        <Link
          to="/home"
          className="flex flex-col  items-center justify-center z-20"
        >
          <img src={logo} alt="logo" className="h-16 " />
          <h2 className="block text-3xl font-medium  text-white cursor-default tracking-wider">
            TestBench-VS
          </h2>
        </Link>
        <div className="absolute right-6 top-6 z-20">
          <Link to="/graph" className="text-white underline">
            View total graph
          </Link>
        </div>
      </div>
      <div className="w-full absolute top-1/4 -mt-5 lg:w-4/5 h-full flex flex-col justify-start items-center ">
        <div className="flex justify-center  items-center flex-wrap gap-10 lg:gap-x-28 lg:w-3/5 my-5 w-4/5 pb-4 ">
          <div className="w-4/5 lg:w-4/5 mt-6">
            <SearchBar setVal={handleChange} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap w-5/6 lg:w-11/12   mt-5 p-5">
          {tables}
        </div>
      </div>
    </div>
  );
}
