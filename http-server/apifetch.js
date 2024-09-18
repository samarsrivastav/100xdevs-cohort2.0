//method -1 
function getAnimalData1(){
    fetch("https://fakerapi.it/api/v1/persons")
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data);
        })
    })
}
// method -2
async function getAnimalData2(){
    const response = await fetch("https://fakerapi.it/api/v1/persons")
    const data =await  response.json()
    console.log(data)
}
getAnimalData2()