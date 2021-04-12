const { Usuario, Post, Comentario, sequelize } = require('./models');
const {Op} = require('sequelize');


// Usuario.findAll()
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Post.findAll()
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Comentario.findAll()
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Post.findAll({
//     where: {
//         //usuarios_id: 1
//         texto: {[Op.like]: 'oi%'}
//     }
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
   
// });

// Usuario.findAll({
//     order:[
//         ['id', 'ASC']  //ASC=crescente DESC= decrescente
//     ],
//     limit: 2,  // de todos os resultados eu sóquero 2
//     offset: 2   //vai pular os dois primeiros e trazer 3 e 4
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Usuario.findAll({
//     where:{
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

// Usuario.findAll({
//     where:{
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

for (let i= 0; i< 6; i+=2){
Comentario.findAll({
    order:[
        ['id', 'ASC']  
    ],
    limit: 2, 
    offset: i
})
.then ((resultado) => {
    console.table(resultado.map(user => user.toJSON())); 
});
}