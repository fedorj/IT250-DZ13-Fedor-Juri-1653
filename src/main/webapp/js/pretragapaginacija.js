$(document).ready(function () {
    $("#pretaga").keyup(function () {
        var value = $(this).val();
        if (value != "") {
            $.ajax({
                url: 'services/FindState?ime=' + value,
                data: {
                    ime: value
                },
                success: function (data) {
                    $('#table').empty();
                    $('#table').append(data);
                }
            });
        } else {
            $.ajax({
                url: 'services/PaginationGrid?page=1',
                success: function (data) {
                    $('#table').empty();
                    $('#table').append(data);
                    $(".callservice").bind("click", hanlder);
                }
            });
        }
    });
    var hanlder = function () {
        $.ajax({
            url: 'services/PaginationGrid?page=' + $(this).text(),
            success: function (data) {
                $('#table').empty();
                $('#table').append(data);
                $(".callservice").bind("click", hanlder);
            }
        });
    };
    $.ajax({
        url: 'services/PaginationGrid?page=1',
        success: function (data) {
            $('#table').empty();
            $('#table').append(data);
            $(".callservice").bind("click", hanlder);
        }
    });
});
