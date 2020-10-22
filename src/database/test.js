const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    
    await saveOrphanage(db, {
        lat: "-7.107902",
        lng: "-34.8871213",
        name: "Casa Pequeno Davi",
        about: "A Casa Pequeno Davi, organização não governamental sem fins lucrativos que funciona desde 1985 no Baixo Roger, tem como MISSÃO contribuir para efetivação dos direitos humanos, em especial crianças e adolescentes em vulnerabilidade social, com ações de educação integral, articulação comunitária e institucional e intervenção nos espaços de políticas públicas da Paraíba, numa perspectiva de desenvolvimento sustentável.",
        whatsapp: "987654321",
        images: [
            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600712243809-7a3dd4e68fff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de Visitar Das 8h até 18h",
        open_on_weekends: "0"
    }); 
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage);

    // deletar dado da tabela de
    //console.log(await db.run('DELETE FROM orphanages WHERE id ="4"'))
    //console.log(await db.run('DELETE FROM orphanages WHERE id ="5"'))

})