const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  
  //insert
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6455874",
    name: "Lar das crianças",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9997887897987",
    images: [
      "https://images.unsplash.com/photo-1602724797380-57978874df4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1602744352504-04eddc408637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: " Horário de visitas Das 18h até 8h.",
    open_on_weekends: "0"


  })

  //review

  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)


  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  //console.log(orphanage)

  //delete
  //await db.run("DELETE FROM orphanages WHERE id ='4'")
})