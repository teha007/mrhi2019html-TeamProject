function loaded() {
    var e=document.getElementById("map");
    var location=new google.maps.LatLng(37.562161,127.035199);
    var option={
        center:location,
        zoom:17
    };
    var marker=new google.maps.Marker({position:location,title:"미래능력개발교육원"});

    var map=new google.maps.Map(e,option);
    marker.setMap(map);
    marker.addListener('click',function() {
        open('http://www.mrhi.or.kr','_blank');
    })
}