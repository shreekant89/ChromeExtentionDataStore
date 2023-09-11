async function fetchData() {
    const jsonData = [
        { id: 1, name: "blah.blah@xyz.com" },
        { id: 2, name: "blah" },
        { id: 3, name: "blahblah" },
        { id: 4, name: "+46 XXXXXX" }
    ];

    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    jsonData.forEach(item => {
        const row = dataTable.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = item.name;
    });
}
fetchData();