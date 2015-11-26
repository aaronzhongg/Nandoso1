//AJAX calls to api
var SpecialsModule = (function () {

    //returns all the specials in the db
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