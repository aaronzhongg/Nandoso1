// This event triggers on page load
document.addEventListener("DOMContentLoaded", function () {
    console.log("This works!");

    //if user is logged into facebook then call the loadSpecials function to start loading specials
    if (checkLoginState() == "connected") {
        loadSpecials();
    }
});

function loadSpecials() {

    var specialsTable = document.getElementById("tblspecialscontent");

    //get the specials from SpecialsModule then call function to create table
    SpecialsModule.getSpecials(function (specialsList) {
        setupSpecialsTable(specialsList);
    });

    // after retrieving specials from SpecialsModule, set up table
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

    //hide the loginmsg after logged in
    document.getElementById('loginmsg').style.visibility = "hidden";
    
}