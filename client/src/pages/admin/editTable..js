import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputText from "../../components/form/inputText";
import Textarea from "../../components/form/textarea";
import NavbarAdmin from "../../components/navBarAdmin";
import SideBar from "../../components/sideBar";
import Alert from "../../components/ui/Alert";
import FillButton from "../../components/ui/fillButton";
import WhiteButton from "../../components/ui/whiteButton";
import { TOAST } from "../../data/toast";

export default function EditTable() {
  const { id } = useParams();
  const [shown, setShown] = useState([]);
  const [change, setChange] = useState(false);
  const [table, setTable] = useState({
    description: "",
    name: "",
    numForeignKey: "",
    categoryId: "",
    rowCount: "",
  });
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/tables/" + id)
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
      });
    fetch("http://localhost:5500/attributes/table/" + id)
      .then((res) => res.json())
      .then((data) => setAttributes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (event) => {
    fetch("http://localhost:5500/tables/" + id, {
      method: "PATCH",
      body: JSON.stringify(table),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        setChange((prev) => !prev);
        attributes.forEach((attribute) => {
          fetch("http://localhost:5500/attributes/" + attribute.id, {
            method: "PATCH",
            body: JSON.stringify(attribute),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then(() => {})
            .catch(() => {
              setShown((prev) => [
                ...prev,
                <Alert
                  title={TOAST.error.title}
                  text="There was a problem! we can't update the columns for the moment."
                  svg={TOAST.error.svg}
                />,
              ]);
            });
        });
        setShown((prev) => [
          ...prev,
          <Alert
            title={TOAST.success.title}
            text="The table has been updated successfully."
            svg={TOAST.success.svg}
          />,
        ]);
      })
      .catch(() => {
        setChange((prev) => !prev);
        setShown((prev) => [
          ...prev,
          <Alert
            title={TOAST.error.title}
            text="There was a problem! we can't update the table for the moment."
            svg={TOAST.error.svg}
          />,
        ]);
      });
    event.preventDefault();
  };

  const handleChangeTable = (event) => {
    const { name, value } = event.target;
    setTable((prevTable) => ({
      ...prevTable,
      [name]: value,
    }));
  };

  const handleChangeAttributes = (event, id) => {
    const { name, value } = event.target;
    const attribute = attributes[id];
    attribute[name] = value;
    setAttributes((prevAttribute) =>
      prevAttribute.map((att) => {
        return { ...att, attribute };
      })
    );
  };

  const columns = attributes.map((column, index) => (
    <div className="grid lg:grid-cols-3 gap-4 mt-2" key={index}>
      <div className="col-span-1 col-start-1">
        <InputText label="name" disable={true} val={column.name} />
      </div>
      <div>
        <InputText label="type" disable={true} val={column.type} />
      </div>
      <div>
        <InputText
          label="description"
          name="description"
          disable={!change}
          val={column.description}
          setVal={handleChangeAttributes}
          index={index}
        />
      </div>
    </div>
  ));
  return (
    <div className="flex overflow-hidden h-screen w-screen">
      <div className="fixed bottom-3 right-0 flex flex-col items-end gap-1 z-30">
        {shown}
      </div>
      <SideBar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <NavbarAdmin />
        <main className="relative flex-1 overflow-y-auto focus:outline-none bg-slate-50">
          <div className="py-6">
            <div className="px-4 mx-auto  sm:px-6 md:px-8 ">
              {/* Put your content here */}
              <div className="py-4">
                <div className="rounded-lg bg-white p-3">
                  <div className="p-5">
                    <h1 className="font-medium text-3xl">
                      Table: <span>{table.name}</span>
                    </h1>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                      <div className="mt-8 grid lg:grid-cols-2 gap-4 p-3 rounded-lg border-orange-400 border-2">
                        <div>
                          <InputText
                            label="name"
                            disable={true}
                            val={table.name}
                          />
                        </div>
                        <div>
                          <InputText
                            label="total of row"
                            disable={true}
                            val={table.rowCount}
                          />
                        </div>
                        <div>
                          <InputText
                            label="total of foreign key"
                            name="numForeignKey"
                            disable={true}
                            val={table.numForeignKey}
                            setVal={handleChangeTable}
                          />
                        </div>
                        <div className="">
                          <Textarea
                            name="description"
                            val={table.description}
                            disable={!change}
                            setVal={handleChangeTable}
                          />
                        </div>
                      </div>
                      <div className="mt-8 flex flex-col p-3 rounded-lg border-[#07b4a3] border-2 border-dashed">
                        <h2 className="mb-5 text-xl col-span-1 col-start-1 border-b-2 w-max border-[#07b4a3]">
                          Columns
                        </h2>
                        <div className="mb-2 flex flex-col">{columns}</div>
                      </div>
                      <div className="space-x-3 mt-8 gap-2 flex justify-end">
                        {!change && (
                          <FillButton text="change" handleAction={setChange} />
                        )}
                        {change && <FillButton text="update" />}
                        {change && (
                          <WhiteButton text="cancel" handleAction={setChange} />
                        )}
                      </div>
                    </form>
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
