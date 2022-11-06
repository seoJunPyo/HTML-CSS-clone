let documentHeight = document.documentElement.scrollHeight;
let target = document.querySelector(".scroll-inner");
let scrollY = 0;

window.addEventListener("scroll", function () {
  let documentHeight = document.documentElement.scrollHeight;
  let browserHeight = this.window.innerHeight;
  scrollY = this.document.documentElement.scrollTop;

  // 위에서 아래로 (translateY -100%일떄)
  // let percent = -100 + (scrollY / (documentHeight - browserHeight)) * 100 + "%";

  // 아래서 위로 (translateY -100%일떄)
  // let percent = 100 - (scrollY / (documentHeight - browserHeight)) * 100 + "%";

  // 위에서 아래로 (translateY 0일떄)
  // let percent = (scrollY / (documentHeight - browserHeight)) * 100 + "%";

  // 아래서 위로 (translateY 0일떄)
  let percent = -(scrollY / (documentHeight - browserHeight)) * 100 + "%";

  target.style.transform = `translateY(${percent})`;
});

let head = document.getElementById("heading");
let del = document.querySelector(".delete");
let closeBtn = document.querySelector(".close");
let delComplete = document.querySelector(".delComplete");
let bgBlack = document.querySelector(".bg");

function 모달창제어(onOff) {
  let modal = document.querySelector(".modalDiv");

  modal.style.display = onOff;
}

del.addEventListener("click", () => {
  모달창제어("block");
});

closeBtn.addEventListener("click", () => {
  모달창제어("none");
});

bgBlack.addEventListener("click", () => {
  모달창제어("none");
});

delComplete.addEventListener("click", () => {
  모달창제어("none");

  alert("삭제되었습니다.");
});

// let cursor = document.querySelector(".cursor");
// let x = document.querySelector(".x");
// let y = document.querySelector(".y");

// function 마우스추적(e) {
//   x.innerHTML = e.clientX;
//   y.innerHTML = e.clientY;

//   let value = `${e.clientX - 25}px, ${e.clientY - 25}px`;

//   cursor.style.transform = `translate(${value})`;
// }

// window.addEventListener("mousemove", 마우스추적);

// let targetBox = document.querySelector("#targetBox");
// let blind = document.querySelector("#blind");

// targetBox.addEventListener("mousemove", function (e) {
//   blind.style.transform = `translateX(${e.clientX}px)`;
// });
