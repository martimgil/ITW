$(document).ready(function() {
    $('#citySelector').change(function() {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {
                q: $('#citySelector').val(),
                appid: 'b2b1df463182c3cca5276e9d3267cc95'
            },
            success: function(data) {
                $('table').removeClass('d-none');
                $('#cityName').html(data.name + '/' + data.sys.country);
                $('#coordinates').html('Lon ' + data.coord.lon + ' / Lat ' + data.coord.lat);
                $('#weather').html(data.weather[0].description);
                $('#temp').html(data.main.temp.toString() + 'K/' + (data.main.temp - 273.15).toFixed(2) + 'C');
                $('#pressure').html(data.main.pressure + 'hPa');
                $('#humidity').html(data.main.humidity + '%');
            },
            error: function() {
                $('table').addClass('d-none');
                alert('Error');
            }
        });
    });
});