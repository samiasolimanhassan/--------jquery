$(".container-fluid").animate({width:"100%" },2000);
$(".container-fluid").animate({height:"100%" },2000
,function(){
    $('h3').slideDown(2000 ,function(){
        $('.col-md-4').slideDown(2000);
    });
});
$('.img-item').click(function (e) {
    let imgSrc=$(e.target).attr('src');
    $('#mainimg').attr('src',imgSrc);

})