function kiemTraNhap() {
  // var inputTen = document.forms["form1"]["username"]
  var inputTen = document.form1.username;
  var giaTriTen = inputTen.value;
  var theP = document.getElementById("thongBao");
  if (giaTriTen == "") {
    theP.style.display = "block";
    theP.style.color = "red";
    theP.innerHTML = "Không được bỏ trống";
    // alert("Không được bỏ trống!")
    return false;
  } else {
    // alert("Đăng nhập thành công")
    theP.innerHTML = "Đăng nhập thành công";
    return true;
  }
}
function kiemTraTatCaKiTu(idTag) {
  var inputTag = document.getElementById(idTag);
  // var inputTag=document.form1.diaChi;
  console.log(inputTag.value);
  var letters = /^[A-Za-z]+$/;
  var theP = document.getElementById("thongBao1");
  if (inputTag.value.match(letters)) {
    theP.style.display = "none";
    // alert('Hợp lệ');
    return true;
  } else {
    theP.style.display = "block";
    theP.innerHTML = "HÃY NHẬP TẤT CẢ ĐỀU LÀ KÍ TỰ";
    theP.style.color = "red";
    // alert('Chỉ được phép nhập các ký tự')
    return false;
  }
}
function kiemTraTatCaLaSo(idTag) {
  var inputTag = document.getElementById(idTag);
  // var inputTag=document.form1.diaChi;
  console.log(inputTag.value);
  var letters = /^[0-9]+$/;
  var theP = document.getElementById("thongBao1");
  if (inputTag.value.match(letters)) {
    theP.style.display = "none";
    // alert('Hợp lệ');
    return true;
  } else {
    theP.style.display = "block";
    theP.innerHTML = "HÃY NHẬP TẤT CẢ ĐỀU LÀ SỐ";
    theP.style.color = "red";
    // alert('Chỉ được phép nhập các ký tự')
    return false;
  }
}
function kiemTraEmailHopLe(idTag) {
  var inputTag = document.getElementById(idTag);
  var email = console.log(inputTag.value);
  var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var theP = document.getElementById("thongBao1");
  if (inputTag.value.match(letters)) {
    theP.style.display = "none";
    // alert('Hợp lệ');
    return true;
  } else {
    theP.style.display = "block";
    theP.innerHTML = "NHẬP EMAIL KHÔNG HỢP LỆ";
    theP.style.color = "red";
    // alert('Chỉ được phép nhập các ký tự')
    return false;
  }
}
function kiemTraMinMax(idText, minlength, maxlength) {
  var inputTxt = document.getElementById(idText);
  var field = inputTxt.value;
  var theP = document.getElementById("thongBao1");
  if (field.length < minlength || field.length > maxlength) {
    theP.style.display = "block";
    theP.innerHTML =
      "Vui lòng nhập userId giữa " + minlength + " và " + maxlength + " kí tự";
    theP.style.color = "red";
    return false;
  } else {
    theP.style.display = "User Id của bạn hợp lệ";
    return true;
  }
}

//sự kiện khi nhấn dang ký
function onDangKy() {
  //ẩn phần đăng nhập
  //hiện thị div đăng ký
  var divDki = document.getElementById("divDangKy");
  var divDangNhap = document.getElementById("divDangNhap");

  divDki.style.display = "block";
  divDangNhap.style.display = "none";
}

function onDangNhap() {
  var divDki = document.getElementById("divDangKy");
  var divDangNhap = document.getElementById("divDangNhap");

  divDki.style.display = "none";
  divDangNhap.style.display = "block";
}

function ktraBatBuocDangKy() {
  var pThongBao = document.getElementById("pThongBao");
  var ngheNghiep = document.getElementById("ngheNghiep");
  var gioiTinhNam = document.getElementById("nam");
  var gioiTinhNu = document.getElementById("nu");
  if (
    frmDangKy.tenDangNhap.value == "" ||
    frmDangKy.matKhau.value == "" ||
    frmDangKy.email.value == "" ||
    frmDangKy.tuoi.value == ""
  ) {
    frmDangKy.tenDangNhap.style.border = "solid 2px red";
    frmDangKy.matKhau.style.border = "solid 2px red";
    frmDangKy.email.style.border = "solid 2px red";
    frmDangKy.tuoi.style.border = "solid 2px red";

    pThongBao.style.display = "block";

    pThongBao.innerHTML = "Không được bỏ trống các trường dữ liệu";
    return false;
  } else if (ngheNghiep.selectedIndex == 0) {
    pThongBao.style.display = "block";
    pThongBao.innerHTML = "Bạn phải chọn nghề nghiệp <br/>";
    return false;
  } else if (!gioiTinhNam.checked && !gioiTinhNu.checked) {
    pThongBao.style.display = "block";
    pThongBao.innerHTML = "Bạn phải chọn giới tính <br/>";
    return false;
  } else {
    pThongBao.style.display = "none";
    return true;
  }
}

function kiemTraHopLe() {
  return (
    ktraBatBuocDangKy() &&
    kiemTraChieuDaiChuoi("tenDangNhap", 1, 30) &&
    kiemTraEmailHopLe("email") &&
    kiemTraTuoi(18, 40, "pThongBao")
  );
}

function kiemTraChieuDaiChuoi(idText, minlength, maxlength) {
  var inputTxt = document.getElementById(idText);
  var field = inputTxt.value;
  var pThongBao = document.getElementById("pThongBao");
  if (field.length < minlength || field.length > maxlength) {
    pThongBao.style.display = "block";
    pThongBao.innerHTML =
      "Vui lòng nhập username từ " + minlength + " đến " + maxlength + " kí tự";
    pThongBao.style.color = "red";
    return false;
  } else {
    pThongBao.style.display = "Username của bạn hợp lệ";
    return true;
  }
}

function kiemTraEmailHopLe(idTag) {
  var inputTag = document.getElementById(idTag);
  var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var pThongBao = document.getElementById("pThongBao");
  if (inputTag.value.match(letters)) {
    pThongBao.style.display = "none";
    // alert('Hợp lệ');
    return true;
  } else {
    pThongBao.style.display = "block";
    pThongBao.innerHTML = "NHẬP EMAIL KHÔNG HỢP LỆ";
    pThongBao.style.color = "red";
    // alert('Chỉ được phép nhập các ký tự')
    return false;
  }
}
function kiemTraTuoi(minTuoi, maxTuoi, idTagThongBao) {
  var pThongBao = document.getElementById(idTagThongBao);
  var tuoi = document.getElementById("tuoi").value;
  var validNumber = /^[0-9]+$/;
  if (tuoi.match(validNumber)) {
    var intTuoi = parseInt(tuoi);
    if (intTuoi > maxTuoi || intTuoi < minTuoi) {
      pThongBao.style.display = "block";
      pThongBao.style.textTransform = "uppercase";
      pThongBao.innerHTML = "Hãy nhập tuổi từ 18 đến 40";
      
      return false;
    } else {
      pThongBao.style.display = "none";
      return true;
    }
  } else {
    pThongBao.style.display = "block";
    pThongBao.innerHTML = "NHẬP TẤT CẢ ĐỀU LÀ SỐ";
    pThongBao.style.color = "red";
    return false;
  }
}
