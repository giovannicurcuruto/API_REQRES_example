
$.ajax("https://reqres.in/api/users").done((result) => {
    console.log("Resultado: ", result.data);
    //  console.log(id_get + " " + first_name + " " + email);

    for (var i = 0; i < result.data.length; i++) {
        var id_get = result.data[i].id;
        var first_name = result.data[i].first_name;
        var email = result.data[i].email;
        var avatar = result.data[i].avatar;


        $("#list").append("<li><img src='" + avatar + "' ><p> Nome: " + first_name + ": " + email + " </p></li>");

    }
}).fail((error) => {
    console.error("erro: ", error)
})

$("#form").on("submit", function (event) {
    event.preventDefault();

    var f_name = $(this).find("input[name=first_name]");
    var l_name = $(this).find("input[name=last_name]");
    //console.log(last_name.val());

    var options = {
        method: "POST",
        data: {
            first_name: f_name.val(),
            last_name: l_name.val()
        }
    };

    $.ajax("https://reqres.in/api/users", options).done(function (result) {
        console.log(result);
        $("#list").prepend("<li>" + result.first_name + " " + result.last_name +" </li>");
    });


});