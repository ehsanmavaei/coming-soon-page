console.log("HELLO");

const test = () => {
  console.log("this is a test");
};

const inputvalue = document.getElementById("email");
const hide = document.getElementsByClassName("hide");

function validateEmail(input) {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(inputvalue.value)) {
    inputvalue.style.color = "green";

    hide[0].style.opacity = "0";

    return true;
  } else inputvalue.style.color = "red";

  hide[0].style.opacity = "1";

  {
    return false;
  }
}
