
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Trabajo', 'Porciento'],
          ['Bienvenidos!!!',     60],
          ['Todo es facilmente personalizable.',     30],
          ['Todas las herramientas que necesitas, en la palma de tu mano.',  10]
        ]);
         var options = {
          title: 'Porcentaje de trabajo en cada area de la pagina',
          is3D: true,};
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
      
      
      
      
      <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Trabajo', 'Porciento'],
          ['Inicio',     60],
          ['Pantalla',     30],
          ['Caracteristicas',  10]
        ]);
         var options = {
          title: 'Mi consumo del café, cigarro y ron',
          is3D: true,};
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
    </script>	
<div id="piechart" style="width:400px;height:300px;"></div>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>