function sendText(sender, text) {
  if (text != "") {
    const parentElement = document.body;
    var div = document.createElement('div');
    div.textContent = sender + ": " + text;
    document.body.appendChild(div);
    parentElement.insertBefore(div, parentElement.firstChild);
    document.getElementById('textbox').value = '';
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    console.log("sending")
    sendText("You", document.getElementById('textbox').value)
  }
})

//openai api test

const { Configuration, OpenAIApi } = require("openai");
