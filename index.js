// template_uxwxufd
// service_v9nzxg5
// vMSW9pyQ5TS2HCDBB

function contact(event) {
  //promise
  event.preventDefault();


  const loading = document.querySelector(".modal__overlay--loading");
  console.log(loading);
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  //loading.classlist += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_v9nzxg5',
      'template_uxwxufd',
       event.target,
      'vMSW9pyQ5TS2HCDBB'
     ).then(() => {
      
        loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
    console.log("it worked 21");
     }).catch (() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailablee. Please contact me directly on email@gmail.com");
     })                               
}
