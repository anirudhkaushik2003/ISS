var i = 1;
var j = 1;
var dictionary = [];
var x = 0,
    entry = 1;


function hoverfunction(tohover) {

    $(tohover).css("color", "chartreuse");
    $(tohover).css("background-color", "dimgray");
}

function unhover(tohover) {

    $(tohover).css("color", "whitesmoke");
    $(tohover).css("background-color", "black");
}

function resetfunction() {
    localStorage.clear();
    location.reload();
}


function whenclicked() {
    i %= 5;
    i += 1;
    document.getElementById("galleryonclick").src = "../img/img" + i + ".jpg";
}

function scpclicked() {
    j %= 5;
    j += 1;
    document.getElementById("scponclick").src = "../img/scp/img" + j + ".jpg";
}

function formHandler() {

    if (document.getElementById("name").value == "" || document.getElementById("skill").value == "") {
        alert("pls fill out all the values")
    } else {
        if (localStorage.getItem("dict") === null) {
            dictionary.push({ name: document.getElementById("name").value, skill: document.getElementById("skill").value, level: document.getElementById("level").value });
            var sizer = dictionary.length - 1;
            localStorage.setItem('dict', JSON.stringify(dictionary));
        } else {
            dictionary = JSON.parse(localStorage.getItem("dict"));

            dictionary.push({ name: document.getElementById("name").value, skill: document.getElementById("skill").value, level: document.getElementById("level").value });
            var sizer = dictionary.length - 1;
            localStorage.setItem('dict', JSON.stringify(dictionary));
        }
        AppendInTable(sizer);
    }


}


function AppendInTable(sizer) {
    $("#tableUp tbody").append("<tr>" +
        "<td>" + entry + "</td>" +
        "<td>" + dictionary[sizer].name + "</td>" +
        "<td>" + dictionary[sizer].skill + "</td>" +
        "<td>" + dictionary[sizer].level + "</td>" +
        "</tr>");
    entry++;
    x++;
}

function AppendSavedTable(dict) {
    for (var l = 0; l < dict.length; l++) {
        $("#tableUp tbody").append("<tr>" +
            "<td>" + entry + "</td>" +
            "<td>" + dict[l].name + "</td>" +
            "<td>" + dict[l].skill + "</td>" +
            "<td>" + dict[l].level + "</td>" +
            "</tr>");
        entry++;
    }

}