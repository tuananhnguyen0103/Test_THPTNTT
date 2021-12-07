$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var listImages = [];
    showSlides(this_dot,this_images,1)
    var user = {
      acount : "ThomTrung",
      password :"12A1THPTNTT"
    }
    localStorage.setItem("user",user);
});
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function showSlides(this_dot,this_images,index) {

  for (i = 0; i < listImages.length; i++) {
    listImages[i].style.display = "none"
    if(listImages[i].getAttribute('index')==index){
      listImages[i].style.display = "block"
    }
  }
}
$(".dot").click(function(){
  console.log($(this).attr("index"))
  this_dot = $(this);
  var index = $(this).attr("index")
  listImages = $(this).parent().parent().find(".child-images");
  images = $(this).parent().parent().find(".child-images").eq(index);
  showSlides(this_dot,images,index)
})