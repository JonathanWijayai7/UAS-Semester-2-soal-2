function hasil() {
  var jam = parseInt(document.getElementById("jam").value);
  var uph = parseInt(document.getElementById("uph").value);
  var anak = parseInt(document.getElementById("anak").value);
  var Gaji = jam * uph;
  document.getElementById("Gaji").innerHTML = Gaji;
  var tunj = 0.1;
  var total;
  if (anak >= 1 && anak < 3) {
    total = Gaji + Gaji * (tunj * anak);
    document.getElementById("total").innerHTML = total;
    document.getElementById("tunj").innerHTML = Gaji * (tunj * anak);
  } else if (anak >= 3) {
    total = Gaji + Gaji * (tunj * 2);
    document.getElementById("total").innerHTML = total;
    document.getElementById("tunj").innerHTML = Gaji * (tunj * 2);
    alert("Tunjangan anak mencapai jumlah maksimal");
  } else {
    total = Gaji + Gaji * (tunj * 0);
    document.getElementById("total").innerHTML = total;
    document.getElementById("tunj").innerHTML = "0";
  }
}

function hapus() {
  document.getElementById("nama").innerHTML = "";
  document.getElementById("jam").innerHTML = "";
  document.getElementById("uph").innerHTML = "";
  document.getElementById("anak").innerHTML = "";
  document.getElementById("Gaji").innerHTML = "";
  document.getElementById("tunj").innerHTML = "";
  document.getElementById("total").innerHTML = "";
}
