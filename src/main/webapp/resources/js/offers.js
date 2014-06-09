$ = jQuery;

var tr = null;

function showReserveBox(btn) {
    tr = $(btn).closest("tr");
    var menu = tr.find(".hiddenRoomMenu");
    menu.appendTo($("#reservation\\:roomMenu"));
    $("#pageCover").show().fadeTo('fast', 0.8, function() {});
    $("#reserveBox").show().fadeTo('fast', 1, function() {
        $(this).find(".hiddenRoomMenu").show();
    });
    $("#reservation\\:reservationOfferId").val(
        $(btn).parent()
            .find("input").val()
    );
    $("#reservation\\:reservationRoomType").val(
        $("#reservation").find("select").val()
    );
    $("#reservation").find("select").change(function() {
        $("#reservation\\:reservationRoomType").val($(this).val());
    });
}

function hideReserveBox() {
    var menu = $("#reserveBox").find(".hiddenRoomMenu");
    menu.appendTo(tr.find(".hiddenRoomContener"));
    tr = null;
    $("#pageCover").fadeOut('fast', function() {
        $(this).hide();
    });
    $("#reserveBox").fadeOut('fast', function() {
        $(this).hide();
    })
    $("#reservation\\:reservationOfferId").val(0);
}

function showMessages() {
    $("#reservation\\:messages").show();
}

function hideMessages() {
    $("#reservation\\:messages").hide();
}

$(document).ready(function() {
    $("#pageCover").click(function() {
        hideMessages();
        hideReserveBox();
    });
    $("#reserveBox").click(function() {
        hideMessages();
    });
});

$(document).load(function() {
    $(".hiddenRoomContener").hide();
    hideMessages();
});


