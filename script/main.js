//Copyright © Mateo José Roca clementis <<mateojoserocaclemntis17@gmail.com>>

let miBoton = document.querySelector("#searchForm");
let myInput = document.querySelector("#UserName-input");

const result = document.querySelector("#result");

miBoton.addEventListener("click", async function (event) {
  event.preventDefault();
  let UserName = myInput.value;

  const options = {
    method: "GET",
    url: `https://instagram-profile1.p.rapidapi.com/getid/${UserName}`,
    headers: {
      "X-RapidAPI-Key": "70d62eb48fmshca07545a16c6bc0p1b67d2jsn64d163f0c484",
      "X-RapidAPI-Host": "instagram-profile1.p.rapidapi.com",
    },
  };

  if (!UserName) {
    show("", "error: ", "empty input");
  } else {
    try {
      const response = await axios.request(options);
      if (response.status > 200 && response.status < 300) {
        console.log(response.status);
        throw new Error(`api queries per hour exceeded`);
      }
      if (response.data.status == 400) {
        show("", "error: ", "typing error");
      } else {
        console.log(response.data);
        show(response, "its id is :");
      }
    } catch (error) {
      show("", "error: ", error);
    }
  }
});

function show(...data) {
  const resulID = document.getElementById("parrafo-resultado");
  if (data[0]) {
    resulID.innerHTML = `${data[1]} ${data[0].data.id}`;
  } else {
    resulID.innerHTML = `${data[1]} ${data[2]}`;
  }
  result.appendChild(resulID);
}

//Copyright © Mateo José Roca clementis <<mateojoserocaclemntis17@gmail.com>>
