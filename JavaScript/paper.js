const buttons = document.querySelectorAll("button[type='button']");
var paperFullScr = document.querySelector(".paperFullScr");
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    console.log("click");
    var imageSrc = document.querySelectorAll(".box-img img")[index].src;
    paperFullScr.style.display = "block";
    document.querySelector(".cenImg").innerHTML = `<img src="${imageSrc}" >`;
  });
});
document.getElementById("cls").addEventListener("click", () => {
  paperFullScr.style.display = "none";
});
