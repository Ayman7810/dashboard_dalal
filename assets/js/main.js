

let width=$(window).width();
let height=$(window).height();

console.log("width:"+width+" /n height:"+height);

 
setInterval(function time(){
   var d = new Date();
   var hours = 24 - d.getHours();
   var min = 60 - d.getMinutes();
   if((min + '').length == 1){
     min = '0' + min;
   }
   var sec = 60 - d.getSeconds();
   if((sec + '').length == 1){
         sec = '0' + sec;
   }
   jQuery('#the-final-countdown p').html(hours+':'+min+':'+sec)
 }, 1000);

 $(".icon-bell").click(function(){
   $(".noti").toggle(300);
  
});
$(".noti-sh").click(function(){
   $(".ma").css("display","none");
   $(".mk").css("display","none");
   $(".go").css("display","none");
  
});
$(".noti-ma").click(function(){
   $(".ma").css("display","none");
   $(".mk").css("display","none");
   $(".go").css("display","none");
  
});

$(".eyeIcon").click(function(){
    $(".user-alert").toggle(300);
    $(".unlok-alert-user").css("display","none");
    $(".homes-alart").css("display","none");
});


$(".person-lock").click(function(){
   $(".lock-alert-user").toggle(300);
  
});

$("#btn-yas").click(function(){ 
$("#alert-info").show(1000);
$("#alert-info").hide(3000);
$(".unlok-alert-user ").css("display","none");


});
$("#btn-yas").click(function(){ 
   $("#alert-info").show(1000);
   $("#alert-info").hide(3000);
   $(".lock-alert-user ").css("display","none");
   
   
   });


$(".eyeIcon1").click(function(){
    $(".homes-alart").toggle(300);
    $(".user-alert").css("display","none");
    $(".unlok-alert-user").css("display","none");
  
});

$(".icon2").click(function(){
   $(".user-alert").css("display","none");
   $(".person-lock-alert").css("display","none");
});

 $(".iconh1").click(function(){
    $(".homes-alart").css("display","none");
 });

 $(".trash").click(function(){
     $(".trash-alert").toggle(300);
 });
 
 $(".bake").click(function(){
    $(".lock-alert-user").css("display","none");
    $(".user-alert").css("display","none");
    $(".homes-alart").css("display","none");
    $(".alert-confi-home").css("display","none");
    $(".alert-confi-stor").css("display","none");
    $(".alert-confi-bulid").css("display","none");
    $(".alert-confi-room").css("display","none");
 })
$(".unlok-user").click(function(){
   $(".unlok-alert-user").toggle(300);
   $(".user-alert").css("display","none");
   $(".homes-alart").css("display","none");
  
});
 $(".bake").click(function(){
 $(".unlok-alert-user").css("display","none");
 $(".person-lock-alert").css("display","none");
 
  });

$(".eyeIcon-lock").click(function(){
   $(".lock-alert-user").css("display","none");
   $(".person-lock-alert").toggle(300);

}); 
$("#btn-conf-info").click(function(){
   $("#alert-confi-home").show(300);
   $(".alert-confi-bulid").css("display","none");
   $(".alert-confi-room").css("display","none");
   $(".alert-confi-stor").css("display","none");
  
}); 
$("#btn-conf-info-stor").click(function(){
   $("#alert-confi-stor").show(300);
   $(".alert-confi-bulid").css("display","none");
   $(".alert-confi-room").css("display","none");
   $(".alert-confi-home").css("display","none");
  
}); 
$("#btn-conf-info-bulid").click(function(){
   $("#alert-confi-bulid").show(300);
   $(".alert-confi-home").css("display","none");
   $(".alert-confi-room").css("display","none");
   $(".alert-confi-stor").css("display","none");
}); 
$("#btn-conf-info-room").click(function(){
   $("#alert-confi-room").show(300);
   $(".alert-confi-bulid").css("display","none");
   $(".alert-confi-home").css("display","none");
   $(".alert-confi-stor").css("display","none");
}); 
$("#btn-yas-home").click(function(){
   $(".alert-confi-home").css("display","none");
   $("#alert-info").show(1000);
   $("#alert-info").hide(2000);
   $(".home").css("display","none");
}); 
$("#btn-yas-bulid").click(function(){
   $(".alert-confi-bulid").css("display","none");
   $("#alert-info").show(1000);
   $("#alert-info").hide(3000);
   $(".bulid").css("display","none");
}); 
$("#btn-yas-stor").click(function(){
   $(".alert-confi-stor").css("display","none");
   $("#alert-info").show(1000);
   $("#alert-info").hide(2000);
   $(".stor").css("display","none");
}); 
$("#btn-yas-room").click(function(){
   $(".alert-confi-room").css("display","none");
   $("#alert-info").show(1000);
   $("#alert-info").hide(2000);
   $(".room").css("display","none");
}); 

