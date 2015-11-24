// We've sepearated out all the functions related to making the AJAX calls to the API
// Just keeps things tidy, allows us to keep some things private
var SpecialsModule = (function () {

    // Return anything that you want to expose outside the closure
    return {
        getSpecials: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://nandosonandoso.azurewebsites.net/api/Specials",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        }
    };
}());