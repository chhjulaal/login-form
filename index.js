let signIn = document.getElementById("Sign-in");
let signUp = document.getElementById("Sign-Up");
let h3 = document.getElementById("sign");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let underLine = document.querySelector(".undeline");
para2.style.display = "none";
h3.innerText = "Sign Up";
signUp.classList.add("bgClr");
function signUpbtn() {
  let signUp = document.getElementById("Sign-Up");
  if (signUp.classList.contains("bgClr")) {
  } else {
    signIn.classList.remove("bgClr");
    signUp.classList.add("bgClr");
    let h3 = document.getElementById("sign");
    h3.innerHTML = "Sign Up";
    // console.log(h3);
    para1.style.display = "block";
    para2.style.display = "none";
    let nameInput = document.getElementById("nameInput");
    // console.log("ddd", nameInput);
    nameInput.style.display = "block";
    console.log(para1);
    underLine.style.transform = "translateX(5px)";
  }
}
function signInbtn() {
  let signIn = document.getElementById("Sign-in");
  signUp.classList.remove("bgClr");
  signIn.classList.add("bgClr");
  let h3 = document.getElementById("sign");
  h3.innerHTML = "Sign in";
  console.log(para2);
  para1.style.display = "none";
  para2.style.display = "block";
  let nameInput = document.getElementById("nameInput");
  //   console.log("aaa", nameInput);
  nameInput.style.display = "none";
  //   console.log(h3);
  underLine.style.transform = "translateX(35px)";
}
