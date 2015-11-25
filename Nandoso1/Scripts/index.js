// This event triggers on page load
document.addEventListener("DOMContentLoaded", function () {
    console.log("This works!");
    if (checkLoginState() == "connected") {
        loadSpecials();
    }
});

function loadSpecials() {

    // We need a reference to the div/table that we are going to chuck our data into
    var specialsTable = document.getElementById("tblspecialscontent");

    SpecialsModule.getSpecials(function (specialsList) {
        setupSpecialsTable(specialsList);
    });

    // This is the callback for when the data comes back in the studentmodule
    function setupSpecialsTable(specials) {
        console.log(specials);
        for (i = 0; i < specials.length; i++) {

            // Create row 
            var row = document.createElement('tr');

            // Add the columns in the row (td / data cells)
            var nameCol = document.createElement('td');
            nameCol.innerHTML = specials[i].ItemName;
            row.appendChild(nameCol);

            var normalPriceCol = document.createElement('td');
            normalPriceCol.innerHTML = specials[i].NormalPrice;
            row.appendChild(normalPriceCol);

            var specialPriceCol = document.createElement('td');
            specialPriceCol.innerHTML = specials[i].SpecialPrice;
            row.appendChild(specialPriceCol);

            // Append the row to the end of the table
            specialsTable.appendChild(row);

        }
    }
    document.getElementById('loginmsg').style.visibility = "hidden";
    document.getElementById('logged').style.visibility = "hidden";
}