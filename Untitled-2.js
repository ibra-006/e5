<html>
<head>
<body>
<title>IngTravel</title>
<div class="A">
  <button1 id="W"onclick="openCity(ingtravel)">
  <font color="green">in</font><font color="white">g</font><font color="red">tra</font><font color="white">v</font><font color="green">el</font></button1>
  </div>
<div class="ASSA">  
<input type="text" id="myInput" onkeyup="myFunction()" placeholder="...">
</div>
<div class="Z">
  <button1> 
   <a class="_25d45facb5--button--KVooB _25d45facb5--link-button--ujZuh _25d45facb5--XS--O4Jq_ _25d45facb5--button--wvpRY" 
   rel="noopener" href="c:\Users\Исрафил\Desktop\МойСайт\index10.html">
   <span class="_25d45facb5--text--V2xLI"><img src="img/плюс.png"></span></a>
  </button1>
</div>
<div class="qw"><button class="WQ" onclick="document.getElementById('id01').style.display='block'">Login</button></div>
<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'"
class="close" title="Close Modal">&times;</span>
  <form class="modal-content animate" action="/action_page.php">
    <div class="imgcontainer">
      <img src="img/avatar.jpg" alt="Avatar" class="avatar">
    </div>
    <div class="container2">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>
    
    <div class="container2" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>
<div class="qw1"><button class="WQ1" onclick="document.getElementById('id011').style.display='block'">Register</button></div>
<div id="id011" class="modal">
  <span onclick="document.getElementById('id011').style.display='none'"
 class="close" title="Close Modal">&times;</span>
 <form style="border-radius: 10px; height: 400px;" class="modal-content animate" action="/action_page.php">
  <div class="tab">Name:
  <p><input style="border-radius: 10px;" placeholder="First name..." oninput="this.className = ''"></p>
  <p><input style="border-radius: 10px;" placeholder="Last name..." oninput="this.className = ''"></p>
  </div>
  <div class="tab">Contact Info:
  <p><input style="border-radius: 10px;" placeholder="E-mail..." oninput="this.className = ''"></p>
  <p><input style="border-radius: 10px;" placeholder="Phone..." oninput="this.className = ''"></p>
  </div>
  <div class="tab">Birthday:
  <p><input style="border-radius: 10px;" placeholder="dd" oninput="this.className = ''"></p>
  <p><input style="border-radius: 10px;" placeholder="mm" oninput="this.className = ''"></p>
  <p><input style="border-radius: 10px;" placeholder="yyyy" oninput="this.className = ''"></p>
  </div>
  <div class="tab">Login Info:
  <p><input style="border-radius: 10px;" placeholder="Username..." oninput="this.className = ''"></p>
  <p><input style="border-radius: 10px;" placeholder="Password..." oninput="this.className = ''"></p>
  </div>
  <div style="overflow:auto; padding-right: 15px;">
  <div style="float:right;">
    <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
    <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
  </div>
  </div>
  <div style="text-align:center;margin-top:40px;">
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
  </div>
 </form>
</div>

<HR></HR>

<div class="containe">
<table id="myTable">
  <tr>
    <td>
    <div class="container">

  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
     <img src="img/1.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
     <img src="img/2.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
     <img src="img/3.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
     <img src="img/4.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
     <img src="img/5.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
     <img src="img/6.jpg" style="width:100%">
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="img/1.jpg" style="width:100%" onclick="currentSlide(1)" alt="Малгобек">
    </div>
    <div class="column">
      <img class="demo cursor" src="img/2.jpg" style="width:100%" onclick="currentSlide(2)" alt="Малгобек">
    </div>
    <div class="column">
      <img class="demo cursor" src="img/3.jpg" style="width:100%" onclick="currentSlide(3)" alt="Малгобек">
    </div>
    <div class="column">
      <img class="demo cursor" src="img/4.jpg" style="width:100%" onclick="currentSlide(4)" alt="Малгобек">
    </div>
    <div class="column">
      <img class="demo cursor" src="img/5.jpg" style="width:100%" onclick="currentSlide(5)" alt="Малгобек">
    </div>
    <div class="column">
      <img class="demo cursor" src="img/6.jpg" style="width:100%" onclick="currentSlide(6)" alt="Малгобек">
    </div>
  </div>
    </td>
    <td>
<div class="V">
<p>Малгобек</p>
<p>8 988 803 14 59</p>
<p>2 000 500<img src="img/рубль.jpg"></p>
<p>65 м2</p>
</div>
    </td>
  <tr>
    </tr>
    <td>
<div class="container1">

  <div class="mySlides1">
    <div class="numbertext1">1 / 6</div>
     <img src="img/7.jfif" style="width:100%">
  </div>

  <div class="mySlides1">
    <div class="numbertext1">2 / 6</div>
     <img src="img/8.jfif" style="width:100%">
  </div>

  <div class="mySlides1">
    <div class="numbertext1">3 / 6</div>
     <img src="img/9.jfif" style="width:100%">
  </div>

  <div class="mySlides1">
    <div class="numbertext1">4 / 6</div>
     <img src="img/10.jfif" style="width:100%">
  </div>

  <div class="mySlides1">
    <div class="numbertext1">5 / 6</div>
     <img src="img/11.jfif" style="width:100%">
  </div>

  <div class="mySlides1">
    <div class="numbertext1">6 / 6</div>
     <img src="img/12.jfif" style="width:100%">
  </div>

  <a class="prev1" onclick="plusSlides1(-1)">&#10094;</a>
  <a class="next1" onclick="plusSlides1(1)">&#10095;</a>

  <div class="caption-container1">
    <p id="caption1"></p>
  </div>

  <div class="row1">
    <div class="column1">
      <img class="demo1 cursor1" src="img/7.jfif" style="width:100%" onclick="currentSlide1(1)" alt="Сунжа">
    </div>
    <div class="column1">
      <img class="demo1 cursor1" src="img/8.jfif" style="width:100%" onclick="currentSlide1(2)" alt="Сунжа">
    </div>
    <div class="column">
      <img class="demo1 cursor1" src="img/9.jfif" style="width:100%" onclick="currentSlide1(3)" alt="Сунжа">
    </div>
    <div class="column1">
      <img class="demo1 cursor1" src="img/10.jfif" style="width:100%" onclick="currentSlide1(4)" alt="Сунжа">
    </div>
    <div class="column1">
      <img class="demo1 cursor1" src="img/11.jfif" style="width:100%" onclick="currentSlide1(5)" alt="Сунжа">
    </div>
    <div class="column1">
       <img class="demo1 cursor1" src="img/12.jfif" style="width:100%" onclick="currentSlide1(6)" alt="Сунжа">
  </div>
</div>
    </td>
    <td>
<div class="V">
<p>Сунжа</p>
<p>8 988 803 14 59</p>
<p>2 000 500<img src="img/рубль.jpg"></p>
<p>40 м2</p>
</div>
</td>
  </tr>
</table>
</div>
<br>
<HR></HR>

<div class="Sunga">
<div class="N">
<h3>КОНТАКТНЫЕ ДАННЫЕ РЕЕЛТОРА</h3>
<h3><a href="https://e.mail.ru/inbox/ibrahim.nalgiev@mail.ru" class="btn-success" style="font-family: Arial, Helvetica, sans-serif;">ibrahim.nalgiev@mail.ru</a></h3>
<h3><a href="tel:+79834648457" class="btn-success">+7 (988) 803-81-59</a> </h3>

<div id="point">
<div style="padding-right:6px; cursor: pointer; border-radius: 100%;"><a href="https://www.facebook.com/"><img src="img/a.png"></a></div>
<div style="padding-right:5px; cursor: pointer; border-radius: 15px;"><a href="https://web.tlgrm.app/"><img src="img/i.png"></a></div>
<div style="padding-right:6px; cursor: pointer; border-radius: 15px;"><a href="https://twitter.com/login"><img src="img/c.png"></a></div>
<div style="padding-right:6px; cursor: pointer; border-radius: 15%;"><a href="https://www.youtube.com/channel/UCOgTG-mhBsUlRLA013_l1Hg"><img src="img/d.png"></a></div>
<div style="cursor: pointer; border-radius: 15px;"><a href="https://wa.me/+79888031459"><img src="img/b.png"></a></div>
</div>
</div>
</div>

<style>
.Z{
  margin-left: 1230px;
  margin-top: -70px;
  margin-bottom: 10px;
  background-position: top right;
  background-color: white;
}
.btn-success{
  color: white;
  text-decoration: none;
  background-position: left;
}
.btn-success:hover{
  color: white;
    cursor: pointer;
}


.A{
  margin-bottom: -50px;
}
.ASSA{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
#W{
  width: 100px;
  height: 40px;
  font-size: 30px;
  font-family: Comic Sans MS;
  background-color: rgb(25, 40, 50);
  border: 1px;
  border-color: rgb(25, 40, 50);
  cursor: pointer;
  border-radius: 15px;
  padding-bottom: 10px;}
#myInput{
  height: 50px;
  background-image: url("лупа.jpg");
  background-repeat: no-repeat;
  width: 55%;
  font-size: 16px;
  font-family: Comic Sans MS;
  color: rgb(25, 40, 50);
  padding: 12px 20px 12px 40px;
  border: 1px solid;
  border-color: rgb(25, 40, 50);
  border-radius: 15px;
  margin-left: 170px;
  margin-bottom: 10px;}
.WQ{    background-position: center left;}
.qw{
    width: 10%;
    margin-left: 1300px;
    margin-top: -67px;}
.WQ1{    background-position: center left;}
.qw1{
    width: 10%;
    margin-left: 1500px;
    margin-top: -67px;}
#nextBtn{
background-color: rgb(0, 255, 0);
border-radius: 10px;
border-color: rgb(1, 255, 1);}
#prevBtn{
background-color: rgb(209, 43, 43);
border-radius: 10px;
border-color: rgb(209, 43, 43);}
#regForm {
  background-color: #00fafa;
  margin: 100px auto;
  padding: 40px;
  width: 70%;
  min-width: 300px;}
#id011{
  width: 100%;
  height: 100%;
  background-position: center;
  }
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: rgb(209, 43, 43);
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;}
.step.active {
  opacity: 1;}
form {
background-position: right;
border: 3px solid red;}
.step.finish {
  background-color: green;}
.modal-content {
    background-color: #fefefe;
    margin: 5px auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */}
.tab {
  border-radius: 10px;
  padding: 15px;
  display: none;}
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;}
.close:hover,
.close:focus {
    color: red;
    cursor: pointer;}
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}}

@keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}}
input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Comic Sans MS;
  border: 1px solid black;}
input.invalid {
  background-color: #ffdddd;}




button {
    font-size: 16px;
    border-radius: 15px;
    font-family: Comic Sans MS;
    background-position: right;
    background-color: rgb(25, 40, 50);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;}
button:hover {
    opacity: 0.8;}
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;}
.modal {
    display: none;
    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-position: center;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;}
.modal-content {
    background-color: #fefefe;
    margin: 5px auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width:35%; /* Could be more or less, depending on screen size */
    height: 70%;}
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;}
.close:hover,
.close:focus {
    color: red;
    cursor: pointer;}
#myInput{
  background-image: url("img/лупа.jpg");
  background-repeat: no-repeat;
  width: 55%;
  font-size: 16px;
  font-family: Comic Sans MS;
  color: rgb(25, 40, 50);
  padding: 12px 20px 12px 40px;
  border: 1px solid;
  border-color: rgb(25, 40, 50);
  border-radius: 15px;
  margin-left: 170px;
  margin-bottom: 10px;}
.modal {
    display: none;
    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-position: center;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;}
.modal-content {
    background-color: #fefefe;
    margin: 5px auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width:35%; /* Could be more or less, depending on screen size */
    height: 70%;}
.container2 {
    padding: 16px;}
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    height: 250px;}
img.avatar {
    width: 40%;
    border-radius: 50%;}
span.psw {
    float: right;
    padding-top: 16px;}
@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
}
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s}
@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
}

@keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
}
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;}
.close:hover,
.close:focus {
    color: red;
    cursor: pointer;}
input[type=text], input[type=password] {
    border-radius: 15px;
    color: rgb(25, 40, 50);
    font-family: Comic Sans MS;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;}
form {
    font-family: Comic Sans MS;
    border: 3px solid red;}


#myTable {
  text-align: left;
  border: 1px solid;
  font-size: 18px;
  border-color: rgb(25, 40, 50);
  margin-left: 220px;
  margin-top: 20px;
  font-family: Comic Sans MS;
  border-color: white;}
.V{
  padding-left: 20px;
  font-size: 22px;
  border-color: rgb(25, 40, 50);
  font-family: Comic Sans MS;}
.containe{
  width: 80%;}
.container {
  position: relative;}
.mySlides {
  max-width: 380px;
  display: none;}
.cursor {
  cursor: pointer;}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  margin-top: 5px;}
.caption-container {
  max-width: 380px;
  margin-top: -17px;
  padding-top: 2px;
  height: 52px;
  text-align: center;
  color: white;
  background-color: rgb(25, 40, 50);}
.row{
max-width: 380px;}
.row:after {
  content: "";
  display: table;
  clear: both;}
.column {
  float: left;
  width: 16.66%;}
.demo {
  opacity: 0.6;}
.active,
.demo:hover {
  opacity: 1;}
button:hover {
    opacity: 0.8;}
.container1 {
  position: relative;
  max-width: 380px;}
.mySlides1 {
  display: none;}
.cursor1 {
  cursor: pointer;}
.prev1,
.next1 {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;}
.next1 {
  right: 0;
  border-radius: 3px 0 0 3px;}
.prev1:hover,
.next1:hover {
  background-color: rgba(0, 0, 0, 0.8);}
.numbertext1 {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;}
.caption-container1 {
  max-width: 380px;
  margin-top: -17px;
  padding-top: 2px;
  height: 52px;
  text-align: center;
  color: white;
  background-color: rgb(25, 40, 50);}
.row1:after {
  content: "";
  display: table;
  clear: both;}
.column1 {
  float: left;
  width: 16.66%;}
.demo1 {
  opacity: 0.6;}
.active1,
.demo1:hover {
  opacity: 1;}




.Sunga{
  width: 100%;
  height: 290px;
  margin-top: 20px;
  border-radius: 15px;
  background-image: url("8.png");
  background-position: center right; 
  background-repeat: no-repeat;
  background-color: rgb(25, 40, 50);}
.T{
  cursor: pointer;
  margin-bottom: 20px;}
#point{
  display: flex;
  flex-direction: row;
margin-right: 20px;}
.N{
  padding-top: 50px;
  color: white;
  font-family: Arial;
  font-size: 18px;
  margin-left: 150px;
  margin-right: 150px;}

</style>

<script>

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("id011").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
var modal = document.getElementById('id011');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}




function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(g) {
  showSlides1(slideIndex1 += g);
}

// Thumbnail image controls
function currentSlide1(g) {
  showSlides1(slideIndex1 = g);
}

function showSlides1(g) {
  var e;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("demo1");
  var captionText1 = document.getElementById("caption1");
  if (g > slides1.length) {slideIndex1 = 1}
  if (g < 1) {slideIndex1 = slides1.length}
  for (e = 0; e < slides1.length; e++) {
    slides1[e].style.display = "none";
  }
  for (e = 0; e < dots1.length; e++) {
    dots1[e].className = dots1[e].className.replace(" active1", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active1";
  captionText1.innerHTML = dots1[slideIndex1-1].alt;
}

</script>

</body>
</head>
</html>