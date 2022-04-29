var list_data = {
    "default": {
        "hien_thi":"Bạn",
        "loi_nhan":"Chúng tôi rất chờ đón sự kiện trọng đại này của cuộc đời, dù phải trì hoãn rất nhiều lần. Đám cưới của chúng tôi sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn. Xin hãy xác nhận sự có mặt của mình để chúng tôi chuẩn bị đón tiếp một cách chu đáo nhất nhé! Trân trọng!",
        "ten_xung":"Chúng tôi",
        "ten_goi":"Bạn",
        "sdt":""
    },
    "yen": {
        "hien_thi":"Em Yến + NT",
        "loi_nhan":"Đến em nhé",
        "ten_xung":"anh chị",
        "ten_goi":"Em",
        "sdt":"097277777"
    },
    "anh": {
        "hien_thi":"V/c Em Anh Mây",
        "loi_nhan":"Đến em nhé",
        "ten_xung":"anh chị",
        "ten_goi":"V/c em",
        "sdt":""
    }
};

$( document ).ready(function() {
    loadList();
});

var loadList = function(){
    var url = new URL(window.location);
    var c = url.searchParams.get("n");
    var obj = list_data.default;
    if(c && list_data[c]){
        obj = list_data[c];
    }
    $("#loi_nhan").text(obj.loi_nhan);
    $("#nguoi_dc_moi").text(obj.hien_thi);
    $("#ip_name").val(obj.hien_thi);
    $("#ip_phone").val(obj.sdt);
    $(".ten_xung").text(obj.ten_xung);
    $(".ten_goi").text(obj.ten_goi);
}