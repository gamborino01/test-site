google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawBarChart);

function drawPieChart() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows([
    ['Basica', 76],
    ['Media Superior', 12],
    ['Vocacional', 5],
    ['Superior', 8.5]
  ]);

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  chart.draw(data, {is3D: true});
}

function drawBarChart() {
	var data = google.visualization.arrayToDataTable([
    ['Ciudad', 'Población 2010', 'Población 2000'],
    ['New York City', 8175000, 8008000],
    ['Los Angeles', 3792000, 3694000],
    ['Chicago', 2695000, 2896000],
    ['Houston', 2099000, 1953000],
    ['Philadelphia', 1526000, 1517000]
  ]);

  var options = {
    title: 'Población de las ciudades más grandes de Estados Unidos',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Poblacion',
      minValue: 0
    },
    vAxis: {
      title: 'Ciudad'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
  chart.draw(data, options);
}

function myMap() {
var myCenter = new google.maps.LatLng(19.446837,-99.073279);
var mapProp= {center:myCenter, zoom:5, disableDefaultUI: true, mapTypeId: google.maps.MapTypeId.HYBRID};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({position:myCenter, animation:google.maps.Animation.BOUNCE});
marker.setMap(map);
var infowindow = new google.maps.InfoWindow({content: "Bienvenido!"});
infowindow.open(map,marker);
}