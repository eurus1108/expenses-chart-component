const day = document.querySelectorAll("[data-day]");
const amount = document.querySelectorAll("[data-modal] > span");
const api_url = "./data.json";

const getData = async () => {
  const response = await fetch(api_url);
  const data = await response.json();

  for (let i = 0, l = data.length; i < l; i++) {
    const obj = data[i];

    day[i].innerHTML = obj.day;
    amount[i].innerHTML = "$" + obj.amount;
  }
};

getData();

const modalOverlay = document.querySelectorAll("[data-modal]");
const barGroup = document.querySelectorAll("[data-bar-container]");

barGroup.forEach((elm) => {
  elm.addEventListener("mouseover", (e) => {
    modalOverlay.classlist.add("visible");
    console.log(e);
  });
  elm.addEventListener("mouseleave", (e) => {
    modalOverlay.classlist.remove("visible");
    console.log(e);
  });
});

console.log(modalOverlay);
