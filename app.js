document.addEventListener("DOMContentLoaded", () => {
  getApiData();
});

const getApiData = async () => {
  let response = await fetch("http://localhost:3000/users");
  let data = await response.json();

  console.log(data);
  console.log("Este cambio fue hecho por la rama dev");
  return data;
};

let btnNewData = document.getElementById("sendNewData");

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
