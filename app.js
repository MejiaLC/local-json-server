let btnNewData = document.getElementById("sendNewData");
let containerCards = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
  getApiData();
});

const getApiData = async () => {
  let response = await fetch("http://localhost:3000/users");
  let data = await response.json();

  console.log(data);

  data.map((item) => {
    containerCards.innerHTML += `
        <p>${item.name}</p>
    `;
  });

  /*   console.log("Este cambio fue hecho por la rama dev");
  console.log("Jeje"); */
  return data;
};

const newDataUser = async (e) => {
  e.preventDefault();
  let newPerson = {
    id: Math.random() * 10,
    name: "Luis",
    age: 90,
    email: "luis@hotmail.com",
  };

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  };

  let response = await fetch("http://localhost:3000/users", options);
  let data = await response.json();

  return data;
};

btnNewData.addEventListener("click", newDataUser);
