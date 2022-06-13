import "./styles.css";

let dragElement;

function handleOnDragStart(e) {
  this.style.opacity = 0.01;
  dragElement = this;
  e.dataTransfer.effectAllowed = "all";
  console.log(e);
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleOnDragEnd(e) {
  this.style.opacity = 1;
  list.forEach((item) => {
    item.classList.remove("over");
    item.style.opacity = 1;
  });
}

function handleOnDragOver(e) {
  this.style.opacity = 0;
  e.preventDefault();
  return false;
}

function handleOnDragEnter(e) {
  this.classList.add("over");
  dragElement.style.opacity = 1;
  dragElement.style.transition = "opacity 1s";
  dragElement.innerHTML = this.innerHTML;
  list.forEach((item) => {
    item.style.opacity = 1;
  });
  console.log("drag entered");
}

function handleOnDragLeave(e) {
  this.classList.remove("over");
  console.log("Drag leave");
}

function handleOnDrop(e) {
  e.stopPropagation();
  if (dragElement !== this) {
    dragElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
    this.style.opacity = 1;
  }
  return false;
}

const list = document.querySelectorAll(".container .box");
list.forEach((item) => {
  item.addEventListener("dragstart", handleOnDragStart);
  item.addEventListener("dragend", handleOnDragEnd);
  item.addEventListener("dragover", handleOnDragOver);
  item.addEventListener("dragenter", handleOnDragEnter);
  item.addEventListener("dragleave", handleOnDragLeave);
  item.addEventListener("drop", handleOnDrop);
});
