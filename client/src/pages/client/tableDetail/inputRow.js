import InputNumber from "../../../components/form/inputNumber";
export default function InputRow(attributes, setStates) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const inputPrim = attributes
    .map((relation) => {
      if (relation.pKey) {
        return (
          <InputNumber
            label={relation.name}
            name={relation.tableName}
            key={relation.tableName}
            setVal={handleChange}
          />
        );
      }
      return null;
    })
    .filter(Boolean);
  const inputRow = attributes.map((relation) => {
    if (relation.fTable) {
      return (
        <InputNumber
          label={relation.name}
          name={relation.fTable}
          key={relation.fTable}
          setVal={handleChange}
        />
      );
    }
    return null;
  });

  inputRow.unshift(...inputPrim);
  return inputRow.filter(Boolean);
}
