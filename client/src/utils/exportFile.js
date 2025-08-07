export default function exportFile(data) {
    const csvString = [
      ["Name", "Row count", "Number of foreign key", "Description"],
      ...data[0].map((item) => [
        item.name,
        item.rowCount,
        item.numForeignKey,
        item.description,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    const csvString2 = [
      [
        "Name",
        "Type",
        "Table name",
        "Description",
        "Primary key",
        "Foreign table",
        "Primary key of foreign table",
        "Index name",
      ],
      ...data[1].map((item) => [
        item.name,
        item.type,
        item.tableName,
        item.description,
        item.pKey,
        item.fTable,
        item.pColumn,
        item.indexName,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
  
    let csvContent = "data:text/csv;charset=utf-8," + csvString;
    var encodedUri = encodeURI(csvContent);
  
    let csvContent2 = "data:text/csv;charset=utf-8," + csvString2;
    var encodedUri2 = encodeURI(csvContent2);
  
  
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Tables.csv");
    document.body.appendChild(link); // Required for FF
  
    link.click();
    document.body.removeChild(link);
  
    var link2 = document.createElement("a");
    link2.setAttribute("href", encodedUri2);
    link2.setAttribute("download", "Attributes.csv");
    document.body.appendChild(link2); // Required for FF
  
    link2.click();
  
    document.body.removeChild(link2);
  
    setTimeout(() => {
      
      alert("the files were downloaded successfully ")
    }, 800);

}
