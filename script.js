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
