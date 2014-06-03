$ = jQuery;

function handleTextChange() {
    $("#hidden_desc").val(
        $("#description > div > textarea").val()
    );
}

function addRoom() {
    inputType = "<input type=\"text\" name=\"types\" class=\"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all\" />";
    inputRoom = "<input type=\"text\" name=\"rooms\" class=\"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all\" />";
    inputPrice = "<input type=\"text\" name=\"prices\" class=\"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all\" />";
    delBtn = "<button type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only roomBtn\" onclick=\"delRoom(this)\"><span class=\"ui-button-icon-left ui-icon ui-c ui-icon ui-icon-closethick\"></span><span class=\"ui-button-text ui-c\">ui-button</span></button>";
    newRow = "<tr class=\"ui-widget-content\" role=\"row\">" +
        "<td role=\"gridcell\" class=\"ui-panelgrid-cell\">"+inputType+"</td>" +
        "<td role=\"gridcell\" class=\"ui-panelgrid-cell\">"+inputRoom+"</td>" +
        "<td role=\"gridcell\" class=\"ui-panelgrid-cell\">"+inputPrice+"</td>" +
        "<td role=\"gridcell\" class=\"ui-panelgrid-cell\">"+delBtn+"</td>" +
        "</tr>";
    $("#roomsTable > tbody > tr:last").after(newRow);
}

function delRoom(element) {
    var tr = $(element).closest("tr");
    if(tr.parent().children().length>1) {
        tr.remove();
    }
}

function submitForm() {
    $("#newOfferForm").submit();
}

