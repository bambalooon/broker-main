$ = jQuery;

function showReserveBox(btn) {
    $("#pageCover").show().fadeTo('fast', 0.8, function() {});
    $("#reserveBox").show().fadeTo('fast', 1, function() {});
    $("#reservationOfferId").val(
        $(btn).parent()
            .find("input").val()
    );

}

