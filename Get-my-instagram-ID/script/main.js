
//Copyright © Mateo José Roca clementis <<mateojoserocaclemntis17@gmail.com>>

let miBoton = document.querySelector("#searchForm");

  miBoton.addEventListener("click", function(event) {
  event.preventDefault(); // previene que el formulario se envíe automáticamente

  let myInput = document.querySelector("#UserName-input");
  let UserName = myInput.value;

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '70d62eb48fmshca07545a16c6bc0p1b67d2jsn64d163f0c484',
		'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
	}
};

const result = document.querySelector("#result")



if(!UserName){

	
		const resulID = document.querySelector("#parrafo-resultado")
		resulID.innerHTML = `error : empty input`
		result.appendChild(resulID)
}

	else{
		
		fetch(`https://instagram47.p.rapidapi.com/get_user_id?username=${UserName}`,options)
		.then(response => response.json())
		.then( data => { 
			const resulID = document.getElementById("parrafo-resultado")
			resulID.innerHTML = `Su Id es: ${data.user_id}`
			result.appendChild(resulID)
		})
 
		.catch(err => {
			console.log(err)
			document.getElementById("parrafo-resultado").innerHTML = `<p>${err}</p>`
		})

		
					
					
	 }
});














//Copyright © Mateo José Roca clementis <<mateojoserocaclemntis17@gmail.com>>