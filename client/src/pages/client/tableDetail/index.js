import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import background from "../../../assets/images/background4.png";
import logo from "../../../assets/images/logo.png";
import Alert from "../../../components/ui/Alert";
import RoundedIconButton from "../../../components/ui/roundedIconButton";
import { TOAST } from "../../../data/toast";
import Columns from "./columns";
import ColumnsFk from "./columnsFk";
import InputRow from "./inputRow";
import RelationsFk from "./relationsFk";
import RelationsPk from "./relationsPk";
import Result from "./result";

export default function TableDetail() {
  let navigate = useNavigate();
  const { name } = useParams();
  const [table, setTable] = useState({});
  const [shown, setShown] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [inputs, setInputs] = useState({});
  const [rowsDB, setRowsDB] = useState({});
  const [showDetail, setShowDetail] = useState(true);
  const [relationsP, setRelationsP] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/tables/one/" + name)
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
        fetch("http://localhost:5500/attributes/table/" + data.id)
          .then((res) => res.json())
          .then((data) => setAttributes(data));
        fetch("http://localhost:5500/attributes/name/" + data.name)
          .then((res) => res.json())
          .then((data) => {
            setRelationsP(data);
          });
      })
      .catch(() => {
        navigate("/404");
      });
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (event) => {
    setRowsDB({});
    Object.keys(inputs).forEach(async function (key, index) {
      if (inputs[key] && !isNaN(inputs[key])) {
        fetch(`http://localhost:5500/tables/search/${key}/PK/${inputs[key]}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              setRowsDB((prev) => {
                return {
                  ...prev,
                  [key]: data,
                };
              });
            } else {
              setShown((prev) => [
                ...prev,
                <Alert
                  title={TOAST.warning.title}
                  text="There is not row with this primary key."
                  color={TOAST.warning.color}
                  svg={TOAST.warning.svg}
                  key={5}
                />,
              ]);
            }
          })
          .catch(() => {
            setRowsDB({});
            setInputs({});
          });
      } else {
        setShown((prev) => [
          ...prev,
          <Alert
            title={TOAST.error.title}
            text="Please enter a valid value (number)."
            color={TOAST.error.color}
            svg={TOAST.error.svg}
            key={5}
          />,
        ]);
      }
    });
    event.preventDefault();
  };
  const columns = Columns(attributes);
  const columnsFk = ColumnsFk(attributes);
  const relationsPk = RelationsPk(relationsP, attributes, table);
  const relationsFk = RelationsFk(attributes, table);
  const inputRow = InputRow(attributes, setInputs);
  const result = Result(rowsDB);
  return (
    <div className="h-screen w-screen  ">
      <div className="fixed bottom-3 right-0 flex flex-col items-end gap-1 z-30">
        {shown}
      </div>
      <div
        className="px-8 py-2 text-left mb-5 h-36 bg-gradient-to-r bg-cover bg-left-top  from-teal-400 to-orange-300 w-full"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <span className="absolute top-0 left-0 m-0 p-0 bg-gray-700 opacity-20   w-full h-36"></span>
        <Link
          to="/home"
          className="flex flex-col mt-4 items-center justify-center"
        >
          <img src={logo} alt="logo" className="h-12 z-20" />
          <h2 className="block text-2xl font-medium  text-white cursor-default tracking-wider z-20">
            TestBench-VS
          </h2>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl mt-6">
          <div className="text-center">
            <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
              <div>
                <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-orange-500">
                  {table.rowCount} Row
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-start">
                <span className="relative inline-block ">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block fill-[#3e9688] "
                  >
                    <defs>
                      <pattern
                        id="b039bae0-fdd5-4311-b198-8557b064fce0"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>
                <span className="z-20 text-left bg-white"> {table.name}</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {table.description ? table.description : "no description yet"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-10 ">
          <span className="inline-block w-40 h-1 bg-orange-400 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-orange-400 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-orange-400 rounded-full"></span>
        </div>
        <div className="flex justify-center items-center mx-auto mb-5 ">
          <h3 className="px-6 text-xl  italic">Meta data</h3>
          <label
            htmlFor="AcceptConditions"
            className="relative w-16 h-8 cursor-pointer"
          >
            <input
              type="checkbox"
              id="AcceptConditions"
              className="sr-only peer"
              onChange={(e) => setShowDetail((prev) => !prev)}
            />
            <span className="absolute inset-0 bg-orange-400 rounded-full transition peer-checked:bg-[#3e9688]" />
            <span className="absolute inset-0 w-6 h-6 m-1 bg-white rounded-full transition peer-checked:translate-x-8" />
          </label>

          <h3 className="px-6 text-xl  italic">Data search</h3>
        </div>
        {showDetail ? (
          <div className=" relative flex flex-col  lg:flex-row justify-start items-start w-full h-full px-4 lg:px-20 pb-4 gap-2 mt-5 m-5">
            <div className="w-full h- flex flex-col justify-start items-start m-0 basis-7/12 gap-2 ">
              <div className=" flex flex-col gap-2 w-full m-0 p-5   ">
                <h2 className="mb-4 text-lg w-max border-b-2 border-orange-500 ">
                  Columns
                </h2>
                <div
                  className="flex flex-col justify-start items-start gap-2 w-full border-b
                 border-dashed border-[#3e9688] pb-1"
                >
                  {columns}
                </div>
              </div>
              <div className=" w-full m-0 p-5 bg-white rounded-lg text-neutral-900 ">
                <h2 className="mb-4 w-max text-lg border-b-2 border-[#3e9688] border-dashed ">
                  Foreign Keys
                </h2>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  {columnsFk.length > 0
                    ? columnsFk
                    : "This table don't have any foreign key."}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start  flex-1 gap-2 mt-9 lg:mt-0 p-5  border-2 border-orange-600 border-dashed rounded-lg self-start ">
              <h2 className="mb-4 text-lg border-b-2 border-[#3e9688] ">
                Relations
              </h2>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                {relationsPk.length > 0 || relationsFk.length > 0
                  ? [relationsFk, relationsPk]
                  : "This table is not link to any other table :( ..."}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-start items-center gap-6 m-3 p-2 w-full">
            <form className="flex justify-center items-center flex-col flex-wrap lg:flex-row h-min gap-3 w-fit">
              <div className="flex justify-center items-center flex-col flex-wrap md:flex-row gap-2">
                {inputRow}
              </div>
              <div className="lg:self-end -mb-1">
                {inputRow.length > 0 ? (
                  <RoundedIconButton
                    text="search"
                    handleClick={handleSubmit}
                    svg={
                      <svg
                        viewBox="0 0 512 512"
                        className=" fill-white group-hover:fill-orange-500"
                      >
                        <path
                          d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
                          strokeWidth="6"
                        ></path>
                      </svg>
                    }
                  />
                ) : null}
              </div>
            </form>
            <div className="flex justify-center items-start flex-wrap gap-3">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
