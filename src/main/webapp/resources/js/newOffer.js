$ = jQuery;
$(document).ready(function() {
    $("#addRoom").click(function() {
        inputRoom = "<input type='text' name='rooms' />";
        inputPrice = "<input type='text' name='prices' />";
        newRow = "<tr><td>"+inputRoom+"</td><td>"+inputPrice+"</td></tr>";
        $("#roomTable > tbody > tr:last").after(newRow);
    });
});
