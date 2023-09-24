/*🐾🐾🐾🐾🐾🐾 Tags Input 🐾🐾🐾🐾🐾🐾*/
const input = document.getElementById("skills");
const output = document.getElementById("tags");
const form = document.getElementById("form");

//prevent form submitting
form.addEventListener("submit", (e) => {
  if (input.value === "") {
    e.preventDefault();
  }
});

//design output tag
const outputTags = (value) => {
  const tag = `<span class="tag grid">
        <b>${value}</b>
        <i class="ri-close-line tag-btn"></i>
    </span>`;
  output.innerHTML += tag;
};

//add tag to tags div
var validToAdd = true;

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && input.value != "") {
    if (output.children.length != 0) {
      for (let i = 0; i < output.children.length; i++) {
        e.preventDefault();
        if (
          input.value === output.children.item(i).children.item(0).innerHTML
        ) {
          validToAdd = false;
        }
      }
    }
    if (validToAdd) {
      e.preventDefault();
      outputTags(input.value);
      input.value = "";
    } else {
      console.log("error meow");
      input.value = "";
    }
  }
});

//delete tag when clicking delete btn
window.onclick = (e) => {
  if (e.target.classList.contains("tag-btn")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
};

/*🐾🐾🐾🐾🐾🐾 Carousel 🐾🐾🐾🐾🐾🐾*/
const carousel = document.getElementById("carousel");
const length = carousel.children.length;

const moveCarousel = () => {
  carousel.style.width = carousel.children.length * 100 + "%";

  for (let i = 0; i <= length; i++) {
    setTimeout(() => {
      if (i < length) {
        carousel.style.transform = "translateX(" + i * -(100 / length) + "%)";
      } else {
        carousel.style.transform = "translateX(" + 0 + "%)";
      }
    }, i * 5000);
  }
};

window.onload = () => {
  moveCarousel();
  setInterval(() => {
    moveCarousel();
  }, length * 5000);
};
