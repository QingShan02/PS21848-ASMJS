var i = 0;
function choso() {
  var a = Math.round(Math.random() * 10) || -Math.round(Math.random() * 10);
  var b = Math.round(Math.random() * 10) || -Math.round(Math.random() * 10);
  var c = Math.round(Math.random() * 10) || -Math.round(Math.random() * 10);
  document.getElementById("a").value = a;
  document.getElementById("b").value = b;
  document.getElementById("c").value = c;
  mokhoa();
}
function giaipt() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  if (-10 <= a && a <= 10 - 10 <= b && b <= 10 && -10 <= c && c <= 10) {
    var delta = b * b - 4 * a * c;
    document.getElementById("i").innerHTML = 1 + i++;
    //a=0 ==> PT bac 1
    if (a == 0) {
      if (b == 0) {
        if (c == 0) {
          document.getElementById("kq").innerHTML = "Phương trình có vô số nghiệm";
        } else {
          document.getElementById("kq").innerHTML = "Phương trình vô nghiệm";
        }
      } else {
        document.getElementById("kq").innerHTML =
          "Phương trình bậc 1" + "<br><br> x = " + (-c / b).toFixed(2);
      }
    } else if (delta < 0) {
      document.getElementById("kq").innerHTML = "Phương trình vô nghiệm";
    } else if (delta == 0) {
      document.getElementById("kq").innerHTML =
        "Phương trình có nghiệm kép = " + (-b / (2 * a)).toFixed(2);
    } else {
      document.getElementById("kq").innerHTML =
        "Phương trình có 2 nghiệm phân biệt: <br>x<sub>1</sub>= " +
        ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2) +
        "<br>x<sub>2</sub>= " +
        ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2) +
        "<br>Tổng 2 nghiệm = " +
        ((-b + Math.sqrt(delta)) / (2 * a) + (-b - Math.sqrt(delta)) / (2 * a)).toFixed(2) +
        "<br>Tích 2 nghiệm = " +
        ((((-b + Math.sqrt(delta)) / (2 * a)) * (-b - Math.sqrt(delta))) / (2 * a)).toFixed(2);
    }
    khoa();
  } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Hệ số a b c không hợp lệ !!! Vui lòng nhập lại");
  } else {
    alert("Vui lòng nhập số từ -10=>10");
  }
}

var dongho = null;
function time() {
  var today = new Date();
  var time = +today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var datetime = date + " " + time;
  document.getElementById("tg").innerHTML = datetime;
}

function mokhoa() {
  btk = document.getElementById("giai");
  btk.disabled = false;
  btk.className = "nut";
}
function khoa() {
  btk = document.getElementById("giai");
  btk.disabled = true;
  btk.className = "nutkhoa";
}

function reset() {
  var a = (document.getElementById("a").value = "");
  var b = (document.getElementById("b").value = "");
  var c = (document.getElementById("c").value = "");
}
