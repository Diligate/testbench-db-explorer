import Alert from "../components/ui/Alert";
import { TOAST } from "../data/toast";

export default function ImportFile(
  tables,
  columns,
  impTables,
  impColumns,
  setShown
) {
  console.log(impTables, impColumns);
  if (impColumns && impTables) {
    for (let i = 0; i < tables.length; i++) {
      impTables.map((tab) => {
        if (tables[i].name === tab.Name) {
          tables[i].description = tab.Description;
          fetch("http://localhost:5500/tables/" + tables[i].id, {
            method: "PATCH",
            body: JSON.stringify(tables[i]),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).then(() => {});
          return tables[i];
        }
        return tables[i];
      });
    }
    for (let i = 0; i < columns.length; i++) {
      impColumns.map((col) => {
        if (
          columns[i].tableName === col["Table name"] &&
          columns[i].name === col.Name
        ) {
          columns[i].description = col.Description;
          fetch("http://localhost:5500/attributes/" + columns[i].id, {
            method: "PATCH",
            body: JSON.stringify(columns[i]),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).then(() => {});
          return columns[i];
        }
        return columns[i];
      });
    }

    setTimeout(() => {
      setShown((prev) => [
        ...prev,
        <Alert
          title={TOAST.success.title}
          text="The database has been initialized successfully."
          svg={TOAST.success.svg}
          color={TOAST.success.color}
        />,
      ]);
    }, 11000);
  }
}
