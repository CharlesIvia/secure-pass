//Fetch dom elements and and set variables

const result = document.querySelector("#result"),
  copyBtn = document.querySelector(".result-copy"),
  length = document.querySelector("#length"),
  uppercase = document.querySelector("#uppercase"),
  lowercase = document.querySelector("#lowercase"),
  numbers = document.querySelector("#numbers"),
  symbols = document.querySelector("#symbols"),
  generate = document.querySelector("#generate"),
  message = document.querySelector(".message");

//Fn to generate passsword

generate.addEventListener("click", function (e) {
  e.preventDefault();
  let passswordLength = length.value;
  if (passswordLength > 4 && passswordLength <= 25) {
    let passsword = "";
    for (let i = 0; i < passswordLength; i++) {
      passsword += generateRandomCharacter();
    }
    result.value = passsword;
    message.textContent = "";
  } else {
    message.textContent = "Selecr length betwen 5 and 25";
    if (message.classList.contains("message-success")) {
      message.classList.remove("message-success");
    }
    result.value = "";
    hideMessage();
  }
});

//Copy functionality

copyBtn.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const passsword = result.value;

  if (!passsword) {
    return;
  }

  textarea.value = passsword;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  message.textContent = "Password copied";
  message.classList.add("message-success");
  hideMessage();
});

//generate random uppercase

function getRandomUppercase() {
  //ASCII values for A to Z (65 to 90)

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUppercase());
