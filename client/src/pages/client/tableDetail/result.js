export default function Result(data) {
  if (Object.keys(data).length > 0) {
    const result = [];
    Object.keys(data).forEach(async function (key, index) {
      const rows = [];
      Object.keys(data[key][0]).forEach(async function (key2, index) {
        rows.push(
          <div
            className="flex justify-center items-start gap-3"
            key={index * 5}
          >
            <span className="font-semibold flex-1 w-64 mr-6">{key2}</span>
            <span className="">{data[key][0][key2] + ""}</span>
          </div>
        );
      });
      const res = (
        <div
          className="border-2 border-dashed border-[#3e9688] rounded-lg p-3 flex flex-col justify-center items-start gap-3 pt-4"
          key={index}
        >
          <h2 className="self-center text-lg">{key}</h2>
          {rows}
        </div>
      );
      result.push(res);
    });
    return result;
  } else return null;
}
