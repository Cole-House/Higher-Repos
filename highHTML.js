<html>
  <head></head>
    <body>
      <script>
        function showName() {
var userName = document.getElementById('username').value;
document.getElementById('one').innerHTML="Hello " + userName;
}
      </script>
      <input type="text" id="username">
<button onclick="showName()">show my name
</button>
<p id="one">
</p>
    </body>

</html>
