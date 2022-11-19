 //TUGAS AMBIL DATA MODAY SWIMING EMPANG
 const dataAneh = {
    statusCode: 200,
    listing: [
      {
        id: 1,
        name: "budi",
        hobbies: {
          day: "monday",
          activity: "running",
          location: "sport hall",
        },
      },
      {
        id: 2,
        name: "ahmad",
        hobbies: {
          day: "monday",
          activity: "swimming",
          location: "empang",
        },
      },
    ],
  };

   //function 1 objek, filter ahmad, for in hobies, masuk objek

   //function Tugas
 function cetakTugas (paramTugas) {
  const filter = 
    paramTugas.listing.filter ((itemTugas) => {
    return  itemTugas.name == "ahmad"
   
  })

  for (let cetakHobbies in filter) {
   return filter [cetakHobbies].hobbies
  }

}

const ambilData = cetakTugas(dataAneh)
for (let iniData in ambilData){
  console.log (ambilData[iniData])
}