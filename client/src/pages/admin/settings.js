import { useEffect, useState } from "react";
import InputFileCSV from "../../components/form/inputFileCSV";
import InputFileJSON from "../../components/form/inputFileJSON";
import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import Alert from "../../components/ui/Alert";
import FillButton from "../../components/ui/fillButton";
import Modal from "../../components/ui/modal";
import { TOAST } from "../../data/toast";
import csvFileToArray from "../../utils/csvFileToArray";
import ImportFile from "../../utils/importFile";
import ImportFile2 from "../../utils/importFile2";

export default function Settings() {
  const [isShownIni, setIsShownIni] = useState(false);
  const [isShownRef, setIsShownRef] = useState(false);
  const [okInit, setOkInit] = useState(false);
  const [okRefresh, setOkRefresh] = useState(false);
  const [importOne, setImportOne] = useState(true);
  const [shown, setShown] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [allTables, setAllTables] = useState([]);
  const [impAttributes, setImpAttributes] = useState([]);
  const [impAllTables, setImpAllTables] = useState([]);

  const [files, setFiles] = useState();

  const fileReader = new FileReader();
  const fileReader2 = new FileReader();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setImportOne(true);

    if (files.length === 2) {
      if (files[0]) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          let arr = csvFileToArray(text);
          if (arr[0].hasOwnProperty("Row count")) {
            setImpAllTables(arr);
          } else {
            setImpAttributes(arr);
          }
        };

        fileReader.readAsText(files[0]);
      }
      if (files[1]) {
        fileReader2.onload = function (event) {
          const text = event.target.result;
          let arr = csvFileToArray(text);
          if (arr[0].hasOwnProperty("Row count")) {
            setImpAllTables(arr);
          } else {
            setImpAttributes(arr);
          }
        };
        fileReader2.readAsText(files[1]);
      }
      if (impAllTables.length > 0 && importOne === true) {
        setShown((prev) => [
          ...prev,
          <Alert
            title={TOAST.info.title}
            text="Please wait! This may take a minute."
            color={TOAST.info.color}
            svg={TOAST.info.svg}
            key={14}
          />,
        ]);
        ImportFile(
          allTables,
          attributes,
          impAllTables,
          impAttributes,
          setShown
        );

        setImpAllTables([]);
        setImpAttributes([]);
      }
    } else {
      setShown((prev) => [
        ...prev,
        <Alert
          title={TOAST.warning.title}
          text="Please enter two CSV files."
          svg={TOAST.warning.svg}
          color={TOAST.warning.color}
          key={5}
        />,
      ]);
    }
  };
  const handleOnSubmit2 = (e) => {
    e.preventDefault();
    setImportOne(false);
    if (files.length === 2) {
      if (files[0]) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          let arr = csvFileToArray(text);
          if (arr[0].hasOwnProperty("Row count")) {
            setImpAllTables(arr);
          } else {
            setImpAttributes(arr);
          }
        };

        fileReader.readAsText(files[0]);
      }
      if (files[1]) {
        fileReader2.onload = function (event) {
          const text = event.target.result;
          let arr = csvFileToArray(text);
          if (arr[0].hasOwnProperty("Row count")) {
            setImpAllTables(arr);
          } else {
            setImpAttributes(arr);
          }
        };
        fileReader2.readAsText(files[1]);
      }

      if (impAllTables.length > 0 && importOne === false) {
        setImportOne(true);
        setShown((prev) => [
          ...prev,
          <Alert
            title={TOAST.info.title}
            text="Please wait! This may take a minute."
            color={TOAST.info.color}
            svg={TOAST.info.svg}
            key={14}
          />,
        ]);
        ImportFile2(
          allTables,
          attributes,
          impAllTables,
          impAttributes,
          setShown
        );

        setImpAllTables([]);
        setImpAttributes([]);
      }
    } else {
      setShown((prev) => [
        ...prev,
        <Alert
          title={TOAST.warning.title}
          text="Please enter two CSV files."
          svg={TOAST.warning.svg}
          color={TOAST.warning.color}
          key={5}
        />,
      ]);
    }
  };

  const handleOnSubmit3 = (e) => {
    e.preventDefault();
    setImportOne(false);

    if (files.length === 2) {
      let relations ={}
      let parent ={}
      if (files[0]) {
        fileReader.onload = function (event) {
          const text = event.target.result;
          let data = JSON.parse(text)
          if (data[Object.keys(data)[0]].hasOwnProperty("parent")) {
            parent = JSON.parse(text)
            
          } else {
            relations = JSON.parse(text)
          }
        };

        fileReader.readAsText(files[0]);
      }
      if (files[1]) {
        fileReader2.onload = function (event) {
          const text = event.target.result;
          let data = JSON.parse(text)

          if (data[Object.keys(data)[0]].hasOwnProperty("parent")) {
            parent = JSON.parse(text)
            fetch("http://localhost:5500/attributes/relations", {
              method: "POST",
              body: JSON.stringify([parent,relations]),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }).then(() => {
              setShown((prev) => [
                ...prev,
                <Alert
                  title={TOAST.info.title}
                  text="the Relations are added successfully."
                  color={TOAST.info.color}
                  svg={TOAST.info.svg}
                  key={14}
                />,
              ]);
            });
          } else {
            relations = JSON.parse(text)
            fetch("http://localhost:5500/attributes/relations", {
              method: "POST",
              body: JSON.stringify([parent,relations]),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }).then(() => {
              setShown((prev) => [
                ...prev,
                <Alert
                  title={TOAST.info.title}
                  text="the Relations are added successfully."
                  color={TOAST.info.color}
                  svg={TOAST.info.svg}
                  key={14}
                />,
              ]);
            });
          }
        };
        fileReader2.readAsText(files[1]);
      }

    } else {
      setShown((prev) => [
        ...prev,
        <Alert
          title={TOAST.warning.title}
          text="Please enter two JSON files."
          svg={TOAST.warning.svg}
          color={TOAST.warning.color}
          key={5}
        />,
      ]);
    }
  };

  useEffect(() => {
    if (okInit) {
      setShown((prev) => [
        ...prev,
        <Alert
          title={TOAST.info.title}
          text="Please wait! This may take a minute."
          color={TOAST.info.color}
          svg={TOAST.info.svg}
          key={5}
        />,
      ]);
      fetch("http://localhost:5500/tables/", { method: "delete" })
        .then((res) => res.json())
        .then(() => {
          fetch("http://localhost:5500/attributes/", { method: "delete" }).then(
            (res) => res.json()
          );
        });

      fetch("http://localhost:5500/tables/init", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        fetch("http://localhost:5500/attributes/init", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((data) => {
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.success.title}
              text="The database has been initialized successfully."
              svg={TOAST.success.svg}
              color={TOAST.success.color}
              key={data.length}
            />,
          ]);

          setOkInit(false);
        });
      });
    }
    if (okRefresh) {
      setShown((prev) => [
        ...prev,
        <Alert
          title={TOAST.info.title}
          text="Please wait! This may take a minute."
          svg={TOAST.info.svg}
          color={TOAST.info.color}
          key={5}
        />,
      ]);

      fetch("http://localhost:5500/tables/refresh", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((data) => {
        setShown((prev) => [
          ...prev,
          <Alert
            title={TOAST.success.title}
            text="Your website is up to date."
            svg={TOAST.success.svg}
            color={TOAST.success.color}
            key={data.length}
          />,
        ]);

        setOkRefresh(false);
      });
    }
    fetch("http://localhost:5500/tables")
      .then((res) => res.json())
      .then((data) => setAllTables(data));
    fetch("http://localhost:5500/attributes/")
      .then((res) => res.json())
      .then((data) => setAttributes(data));
  }, [okInit, okRefresh]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6">
            <div className="fixed bottom-3 right-0 flex flex-col items-end gap-1 z-30">
              {shown}
            </div>
            <div className="px-4 mx-auto  sm:px-6 md:px-8 ">
              {/* Put your content here */}
              <div className="py-4">
                {isShownIni && (
                  <div>
                    <span className="absolute top-0 left-0 m-0 p-0 bg-neutral-500 opacity-30  w-full h-screen"></span>
                    <Modal
                      text="Are you sure you want to initialize the database?"
                      setShown={setIsShownIni}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 "
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      setOk={setOkInit}
                    />
                  </div>
                )}
                {isShownRef && (
                  <div>
                    <span className="absolute top-0 left-0 m-0 p-0 bg-neutral-400 opacity-30  w-full h-screen"></span>
                    <Modal
                      text="Are you sure you want to refresh the database?"
                      setShown={setIsShownRef}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 "
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      setOk={setOkRefresh}
                    />
                  </div>
                )}
                <div className="rounded-lg bg-white p-3">
                  <div className="m-9 sm:mx-14">
                    <h2 className="text-2xl font-semibold leading-tight">
                      Settings
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-start items-start  mt-5 flex-wrap gap-5">
                      <div className="flex flex-col justify-center items-start flex-1 gap-3">
                        <span className="text-lg">Initialization:</span>
                        <p className="font-light">
                          Reset database (all descriptions will be
                          lost)
                        </p>
                        <FillButton
                          text="Initialize"
                          type="button"
                          handleAction={setIsShownIni}
                        />
                      </div>
                      <div
                        className="flex flex-col justify-center items-start flex-1 
                      gap-3"
                      >
                        <span className="text-lg">Import relations file:</span>
                        <p className="font-light">
                          Import database relations file
                        </p>
                        <InputFileJSON
                          text="Import"
                          handleAction={setFiles}
                          handleOnSubmit={handleOnSubmit3}
                        />
                      </div>

                    </div>
                    <div className="flex flex-col sm:flex-row justify-start items-start  mt-10 flex-wrap gap-5">
                      <div
                          className="flex flex-col justify-center items-start flex-1 
                        gap-3"
                        >
                          <span className="text-lg">Refresh:</span>
                          <p className="font-light">
                            Update row counts
                          </p>
                          <FillButton
                            text="refresh"
                            type="button"
                            handleAction={setIsShownRef}
                          />
                      </div>
                      <div
                        className="flex flex-col justify-center items-start flex-1 
                      gap-3"
                      >
                        <span className="text-lg">Import description:</span>
                        <p className="font-light">
                          Import only descriptions
                        </p>
                        <InputFileCSV
                          text="Import"
                          handleAction={setFiles}
                          handleOnSubmit={handleOnSubmit}
                        />
                      </div>                      
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start items-start  mt-10 flex-wrap gap-5">
                      <div className="flex flex-col justify-center items-start flex-1 gap-3">
                        <span className="text-lg">Export:</span>
                        <p className="font-light">
                          Export tables and columns
                        </p>

                        <FillButton
                          text="Export"
                          type="button"
                          data={[allTables, attributes]}
                        />
                      </div>

                      <div
                        className="flex flex-col justify-center items-start flex-1 
                      gap-3"
                      >
                        <span className="text-lg">Import All:</span>
                        <p className="font-light">
                          Import database
                        </p>
                        <InputFileCSV
                          text="Import"
                          handleAction={setFiles}
                          handleOnSubmit={handleOnSubmit2}
                        />
                      </div>


                    </div>
                    

                  </div>
                </div>
              </div>

              {/* Do not cross the closing tag underneath this coment*/}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
