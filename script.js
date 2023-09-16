async function fetchData() {
    var jsonData = [
        
        { key: 2, value: "Shreekant" },
        { key: 3, value: "Wagh" },

    ];

    // Function to create a "Copy" button
    function createCopyButton(text) {
        var button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", function () {
            var row = this.parentNode.parentNode; // Get the parent row of the clicked button
            var sourceCell = row.cells[1];
            navigator.clipboard.writeText(sourceCell.textContent).then(function () {
                //alert("Copied toclipboard: " + sourceCell.textContent);
            }).catch(function (error) {
                alert("alert");
            });
        });
        return button;
    }

    // Populate the table with JSON data
    var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];

    for (var i = 0; i < jsonData.length; i++) {
        var row = table.insertRow(i);
        var cellCopy = row.insertCell(0);
        var cellValue = row.insertCell(1);

        cellCopy.appendChild(createCopyButton("CP"));

        cellValue.innerHTML = jsonData[i].value;
    }
}
fetchData();