<!Doctype html>
<html>
<style>
.btn-group button {
  background-color: #D3D3D3; /* Green background */
  border: 2px solid black; /* Green border */
  color: black; /* Black text */
  font-size: 20px;
  padding: 50px 50px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
</style>
<body>

<h1>ABopsC Home Page</h1>

<div class="btn-group">
  <button>Lesson  </button>
  <button>Lab Work</button>
  <button>Scoring </button>
</div>

</body>
</html>