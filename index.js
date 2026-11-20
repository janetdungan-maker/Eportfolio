// template_uxwxufd
// service_v9nzxg5
// vMSW9pyQ5TS2HCDBB

function contact(event) {
  //promise
  event.preventDefault();
  //emailjs
  //  .sendForm(
  //    'service_v9nzxg5',
  //    'template_uxwxufd',
  //     event.target,
  //    'vMSW9pyQ5TS2HCDBB'
  //   ).then(() => {
  //       console.log('this worked')
  //   })                                  modal__overlay--loading
  const loading = document.querySelector(".modal__overlay--loading");
  console.log(loading);
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  //loading.classlist += " modal__overlay--visible";
  setTimeout(() => {
    console.log("it worked 21");
  }, 500);
}
