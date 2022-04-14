document.getElementById("showcart").style.display = "none";
var arrsp = new Array();

function themvaogiohang(x) {
  var nodeSP = x.parentElement.children;
  var hinh = nodeSP[0].children[0].src;
  var giasp = nodeSP[1].children[0].innerText;
  var tensp = nodeSP[2].innerText;
  var soluong = parseInt(nodeSP[3].value);
  var sp = [hinh, tensp, giasp, soluong];
  //Kiem tra sản phảm có tron giỏ hàng chưa
  var ktra = 0;
  for (var i = 0; i < arrsp.length; i++) {
    if (arrsp[i][1] == tensp) {
      var sl = arrsp[i][3];
      sl += soluong;
      arrsp[i][3] = sl;
      ktra = 1;
      break;
    }
  }
  if (ktra == 0) arrsp.push(sp);
  demgiohang();
  showmycart();
}

function demgiohang() {
  var a = arrsp.length;
  document.getElementById("countsp").innerText = a;
}
function showcart() {
  var x = document.getElementById("showcart");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else x.style.display = "none";
  showmycart();
}

function showmycart() {
  var ttgh = "";
  var tongtt = 0;
  for (let i = 0; i < arrsp.length; i++) {
    var tt = Number(arrsp[i][2]) * Number(arrsp[i][3]);
    ttgh += `

        <tr id="xx">
                <td>${i + 1}</td>
                <td><img src="${arrsp[i][0]}"></td>
                <td>${arrsp[i][1]}</td>
                <td>${arrsp[i][2]}$</td>
                <td>${arrsp[i][3]}</td>
                <td>${tt}</td>
                
            </tr>
        `;
    tongtt += Number(tt);
  }
  ttgh += `
        <tr>
        <td colspan = "5"> Tổng đơn hàng </td>
        <td> ${tongtt}</td>
        </tr>
    `;
  document.getElementById("mycart").innerHTML = ttgh;
}
