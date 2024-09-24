const axios=require("axios")
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
// getAnimalData2()

//method -3 (Axios)
async function getAnimalDataAxios(){
    const response=await axios.get("https://fakerapi.it/api/v1/persons")

    // const response=await axios.get("https://fakerapi.it/api/v1/persons",{
    // headers:{
    //   Authorization:"Bearer 123"
    //      }
    // })

    // const response=await axios.put("https://fakerapi.it/api/v1/persons")
    // const response=await axios.post("https://fakerapi.it/api/v1/persons")
    // const response=await axios.delete("https://fakerapi.it/api/v1/persons")
    console.log(response.data)
}
getAnimalDataAxios()