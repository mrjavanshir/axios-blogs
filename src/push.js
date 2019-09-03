
window.onload = function(){
    let btn = document.getElementsByClassName('aaaa');

btn.addEventListener("click", function(){
Push.create('pushmessage', {
      title: 'Nitification',
      body: "message",
      timeout: 3000,
    })


})
}