var data = [];

function getvalue() {
    var value = $("#number-input").val();
    return parseInt(value);
}

function draw() {
    var output = $("#output");
    output.html("");
    for (var i=0; i<data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "box");
        div.innerHTML = data[i];
        output.append(div);
    }
}

$(document).ready(function () {
    $("#left-in").click(function () {
        var val = getvalue();
        if (isNaN(val)) {
            alert("not number");
            return;
        }
        data.splice(0, 0, val);
        draw();
    });

    $("#right-in").click(function () {
        var val = getvalue();
        if (isNaN(val)) {
            alert("not number");
            return;
        }
        data.push(val)
        draw();
    });

    $("#left-out").click(function () {
        data.splice(0, 1);
        draw();
    });
    
    $("#right-out").click(function () {
        data.pop();
        draw();
    });
});