$(document).ready(function(){
    var user = {
      acount : "ThomTrung",
      password :"123"
    }
    localStorage.setItem("user",JSON.stringify(user));
});

$("#submit_button").click(function() {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    user = JSON.parse(localStorage.getItem("user"))
    acount = $("#acount_login").val();
    password = $("#password_login").val();
    // console.log(acount +"____" + password);
    if(user.acount==acount && password==user.password){
        (async () => {
            toastr.success('Đăng nhập thành công');
            await sleep(2000);
            window.location = 'https://tuananhnguyen0103.github.io/Test_THPTNTT/index.html'
          })();
    }
    else{
        toastr.warning('Đăng nhập không thành công');
    }
    
});
