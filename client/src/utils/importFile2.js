import Alert from "../components/ui/Alert";
import { TOAST } from "../data/toast";

export default function ImportFile2(
  tables,
  columns,
  impTables,
  impColumns,
  setShown
) {
  if (impColumns && impTables) {
    fetch("http://localhost:5500/tables/", { method: "delete" }).then((res) =>
      res.json()
    );
    fetch("http://localhost:5500/attributes/", { method: "delete" })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:5500/tables/importDb", {
          method: "POST",
          body: JSON.stringify(impTables),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(() => {});

        fetch("http://localhost:5500/attributes/importDb", {
          method: "POST",
          body: JSON.stringify(impColumns),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(() => {
          setShown((prev) => [
            ...prev,
            <Alert
              title={TOAST.success.title}
              text="The database has been imported successfully."
              svg={TOAST.success.svg}
              color={TOAST.success.color}
            />,
          ]);
        });
      });
  }
}
