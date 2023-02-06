function consultar() {
    const id = document.getElementById("id-consulta").value;
    fetch(`http://localhost:8080/parking-spot/${id}`)
        .then(response => response.json())
        .then(data => document.getElementById("result").innerHTML = `<h1>SpotingNumber: ${data.parkingSpotNumber}</h1><h1>LicensePlate ${data.licensePlateCar}</h1><h1>brandCar: ${data.brandCar}</h1><h1>modelCar: ${data.modelCar}</h1><h1>colorCar: ${data.colorCar} </h1><h1>responsibleName: ${data.responsibleName}</h1><h1>apartment: ${data.apartment}</h1><h1>block: ${data.block}</h1><h1>registrationDate: ${data.registrationDate}</h1>`);
}

function confirmar(){
    const spotNumber = document.getElementById("parkingSpotNumber").value;
    const licensePlate = document.getElementById("licensePlateCar").value;
    const brandCar = document.getElementById("brandCar").value;
    const modelCar = document.getElementById("modelCar").value;
    const colorCar = document.getElementById("colorCar").value;
    const responsibleName = document.getElementById("responsibleName").value;
    const apartment = document.getElementById("apartment").value;
    const block = document.getElementById("block").value;
    fetch('http://localhost:8080/parking-spot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "parkingSpotNumber": spotNumber,
            "licensePlateCar": licensePlate,
            "brandCar": brandCar,
            "modelCar": modelCar,
            "colorCar": colorCar,
            "responsibleName": responsibleName,
            "apartment": apartment,
            "block": block
        })
      })
        .then(response => response.json())
        .then(data => console.log(data));
}