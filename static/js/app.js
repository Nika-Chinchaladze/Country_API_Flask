$("#userInput").keyup(function() {
    filterProducts();
})

function filterProducts() {
    var myFilter = $("#userInput").val().toUpperCase();
    var eachProduct = $(".cardDiv");
    var eachHeading = $(".countryHead");

    for (var i = 0; i < eachHeading.length; i++) {
        myh2 = eachHeading[i];
        textValue = myh2.textContent || myh2.innerHTML;
        if (textValue.toUpperCase().indexOf(myFilter) > -1) {
            eachProduct[i].style.display = "";
        }
        else {
            eachProduct[i].style.display = "none";
        }
    }
}


// CHANGE MODE OF PAGE:
$("#modeButton").click(function() {
    changeMode();
})

function changeMode() {
    var currentColor = $("#modeNavbar").css("background-color");
    if (currentColor == "rgb(166, 227, 233)") {
        $("#modeNavbar").css("background-color", "rgb(43, 55, 67)");
        $("#world").css("color", "rgb(255, 255, 255)");
        $("#modeButton").css("color", "rgb(255, 255, 255)");
        $("#modeButton").html("<i class='bi bi-moon-stars-fill'></i>&nbsp; Light Mode");
        $("body").css("background-color", "rgb(31, 45, 54)");
        $(".myP").css("color", "rgb(255, 255, 255)");
        $(".backButton").css("color", "rgb(255, 255, 255)");
        $(".mainDiv").css("box-shadow", "none");
    }
    else {
        $("#modeNavbar").css("background-color", "rgb(166, 227, 233)");
        $("#world").css("color", "rgb(15, 15, 15)");
        $("#modeButton").css("color", "rgb(15, 15, 15)");
        $("#modeButton").html("<i class='bi bi-moon-stars-fill'></i>&nbsp; Dark Mode");
        $("body").css("background-color", "rgb(203, 241, 245)");
        $(".myP").css("color", "rgb(15, 15, 15)");
        $(".backButton").css("color", "rgb(15, 15, 15)");
        $(".mainDiv").css("box-shadow", "10px 5px 5px grey");
    }
}