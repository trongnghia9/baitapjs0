// tính tiền lương.

function tinhtongluong () {
    var luong1ngay = document.getElementById ('tienluong1ngay').value;
    var songaylam = document.getElementById ('songaylam').value;
    var tongLuong = 0
    tongLuong = luong1ngay * songaylam ;
    document.getElementById ('TổngLương').innerHTML = tongLuong.toLocaleString();
    
}
// Tính giá trị trung bình.
function tinhtongtrungbinh() {
    var sothuc1 = document.getElementById ('sothuc1').value;
    var sothuc2 = document.getElementById ('sothuc2'). value;
    var sothuc3 = document.getElementById ('sothuc3') .value;
    var sothuc4 = document.getElementById ('sothuc4') . value;
    var sothuc5 = document.getElementById ('sothuc5') . value;
    var tongtrungbinh = 0;
    tongtrungbinh = (sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5 ) / 5 ;
    document.getElementById ('TongTrungBinh').innerHTML = tongtrungbinh.toLocaleString();
    
}
// quy đổi tiền.
function Quydoitien() {
    var usd = document.getElementById ('usd').value;
    var vnd = document.getElementById ('vnd').value;
    var quydoi = 0;
    quydoi = usd * vnd ;
    document.getElementById ('quydoitien').innerHTML=quydoi.toLocaleString();

    
    
}
// tính chu vi  hình chữ nhật.
 function chuvi () {
    var chieudai = document.getElementById ('chieurongg').value;
    var chieurong = document.getElementById ('chieudaii').value;
    var tongchuvi = 0
    tongchuvi = ( chieurong + chieudai) * 2 ;
    document.getElementById ('tinhchuvicn').innerHTML=tongchuvi;
    
 }
//  tính diện tích hình chữ nhật
function dientich () {
    var chieurong = document.getElementById ('chieurong').value;
    var chieudai = document.getElementById ('chieudai').value;
    var tongdientich = 0;
     tongdientich = chieurong * chieudai ;
    document.getElementById ('tinhdientichcn').innerHTML=tongdientich;
    
}
// tính tổng kí số.
function tongkiso() {
    var number = document.getElementById ('number').value;
    var hangchuc = document.getElementById ('hangchuc').value
    var donvi = document.getElementById ('donvi').value;
    var tong = 0;
    hangchuc = Math.floor(number/10);  
    var soDu = number % 10;
    donvi = soDu % 10;
    tong = hangchuc + donvi ;
    document.getElementById ('tongkiso').innerHTML=tong;

}