const invoke = document.getElementById("head");
const print_ = document.querySelector(".para");
const fire_the_function = () => {
  console.log("Hey u clicked the div tag");
};

const fire_up = () => {
  console.log("Hey u clicked the para tag");
};

print_.addEventListener("click", fire_up);
invoke.addEventListener("click", fire_the_function);
