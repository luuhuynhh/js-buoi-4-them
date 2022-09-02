/**
 * Bài 1
 * 
 */

var txtNgay = document.getElementById("txtNgay");
var txtThang = document.getElementById("txtThang");
var txtNam = document.getElementById("txtNam");
var btnNgayHomQua = document.getElementById("btnNgayHomQua");
var btnNgayMai = document.getElementById("btnNgayMai");
var txtKetqua = document.getElementById("txtKetqua");

function ngayLonNhat(thang, nam) {
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if (nam % 4 === nam % 100 !== 0)
                return 29;
            else return 28;
    }
}

for (var i = 1; i <= 12; i++) {
    console.log(ngayLonNhat(i));
}

btnNgayHomQua.onclick = function () {
    // Đầu vào: Lấy ngày, tháng, năm từ input người dùng
    var ngay = Number(txtNgay.value);
    var thang = Number(txtThang.value);
    var nam = Number(txtNam.value);
    // Xử lý: Tính toán ngày hôm qua
    ngay--;
    if (ngay === 0) {
        thang--;
        if (thang === 0) {
            nam--;
            thang = 12;
        }
        ngay = ngayLonNhat(thang, nam);
    }
    var res = ngay + "/" + thang + "/" + nam;
    // Đầu ra: Hiển thị kết quả
    txtKetqua.value = res;
}

btnNgayMai.onclick = function () {
    // Đầu vào: Lấy ngày, tháng, năm từ input người dùng
    var ngay = Number(txtNgay.value);
    var thang = Number(txtThang.value);
    var nam = Number(txtNam.value);
    // Xử lý: Tính toán ngày mai
    ngay++;
    if (ngay > ngayLonNhat(thang, nam)) {
        thang++;
        ngay = 1;
        if (thang > 12) {
            nam++;
            thang = 1;
        }
    }
    var res = ngay + "/" + thang + "/" + nam;
    // Đầu ra: Hiển thị kết quả
    txtKetqua.value = res;
}

/**
 * Bài 2:
 */

var txtMonth = document.getElementById("txtMonth");
var txtYear = document.getElementById("txtYear");
var btnTinhNgay = document.getElementById("btnTinhNgay");
var txtTinhNgay = document.getElementById("txtTinhNgay");

btnTinhNgay.onclick = function () {
    // Đầu vào: Lấy tháng, năm từ input người dùng
    var month = Number(txtMonth.value);
    var year = Number(txtYear.value);
    console.log(month, year)
    // Xử lý:
    var soNgay = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            soNgay = 30;
            break;
        case 2:
            if (year % 4 === 0 && year % 100 !== 0)
                soNgay = 29;
            else soNgay = 28;
            break;
    }
    var res = "Tháng " + month + ", năm " + year + " có " + soNgay + " ngày";
    // Đầu ra: Hiển thị kết quả
    txtTinhNgay.value = res;
}

/**
 * Bài 3:
 * Đọc số có 3 chữ số
 */

function docSoDon(so) {
    switch (so) {
        case 0:
            return "Không";
        case 1:
            return "Một";
        case 2:
            return "Hai";
        case 3:
            return "Ba";
        case 4:
            return "Bốn";
        case 5:
            return "Năm";
        case 6:
            return "Sáu";
        case 7:
            return "Bảy";
        case 8:
            return "Tám";
        case 9:
            return "Chín";
    }
}

var txtSo = document.getElementById("txtSo");
var btnDocSo = document.getElementById("btnDocSo");
var txtDocSo = document.getElementById("txtDocSo");

btnDocSo.onclick = function () {
    // Đầu vào: Lấy số có 3 chữ số từ input người dùng
    var so = Number(txtSo.value);
    var tram = Math.floor(so / 100);
    var chuc = Math.floor(so % 100 / 10);
    var dv = so % 10;
    // Xử lý:
    var res = "";
    res += (docSoDon(tram) + " trăm ");
    if (chuc === 0) {
        if (dv !== 0) {
            res += (" lẻ " + docSoDon(dv));
        }
    }
    else {
        if (chuc === 1) {
            res += "mười "
        }
        else res += (docSoDon(chuc) + " mươi ");
        if (dv !== 0) res += docSoDon(dv);
    }
    console.log(res);
    // Đầu ra: Hiển thị kết quả
    txtDocSo.value = res;
}

/**
 * Bài 4:
 * Tìm sinh viên xa trường nhất
 */

var txtTen1 = document.getElementById("txtTen1");
var txtX1 = document.getElementById("txtX1");
var txtY1 = document.getElementById("txtY1");

var txtTen2 = document.getElementById("txtTen2");
var txtX2 = document.getElementById("txtX2");
var txtY2 = document.getElementById("txtY2");

var txtTen3 = document.getElementById("txtTen3");
var txtX3 = document.getElementById("txtX3");
var txtY3 = document.getElementById("txtY3");

var txtTruongHoc = document.getElementById("txtTruongHoc");
var txtXt = document.getElementById("txtXt");
var txtYt = document.getElementById("txtYt");

var btnTim = document.getElementById("btnTim");
var txtTim = document.getElementById("txtTim");

btnTim.onclick = function () {
    // Đầu vào: Lấy input từ người dùng
    var ten1 = txtTen1.value;
    var x1 = Number(txtX1.value);
    var y1 = Number(txtY1.value);

    var ten2 = txtTen2.value;
    var x2 = Number(txtX2.value);
    var y2 = Number(txtY2.value);

    var ten3 = txtTen3.value;
    var x3 = Number(txtX3.value);
    var y3 = Number(txtY3.value);

    var truongHoc = txtTruongHoc.value;
    var xt = Number(txtXt.value);
    var yt = Number(txtYt.value);

    console.log(truongHoc, xt, yt);

    // Xử lý:
    // Tìm kc từ 3 sv đến trường
    // Tìm max của 3 kc
    var kc1 = (x1 - xt) ** 2 + (y1 - yt) ** 2;
    var kc2 = (x2 - xt) ** 2 + (y2 - yt) ** 2;
    var kc3 = (x3 - xt) ** 2 + (y3 - yt) ** 2;

    var max = kc1;
    var ten = ten1;
    if (max < kc2) {
        max = kc2;
        ten = ten2;
    }
    if (max < kc3) {
        max = kc3;
        ten = ten3;
    }
    // Đầu ra: Hiển thị kết quả
    var res = "Sinh viên xa trường nhất: " + ten;
    txtTim.value = res;
}