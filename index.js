let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } 
  else {
    document.body.classList.remove("dark-theme");
  }
}

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
      "service_v9nzxg5",
      "template_uxwxufd",
      event.target,
      "vMSW9pyQ5TS2HCDBB",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
      console.log("it worked 21");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailablee. Please contact me directly on email@gmail.com",
      );
    });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  if (isModalOpen) {
    return document.body.classList.remove("modal--open");
    isModalOpen = false;
  }
  isModalOpen = false;
  // toggle modal
  document.body.classList.add("modal--open");
}
