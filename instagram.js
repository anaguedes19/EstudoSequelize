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

// for (let i= 0; i< 6; i+=2){
// Comentario.findAll({
//     order:[
//         ['id', 'ASC']  
//     ],
//     limit: 2, 
//     offset: i
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });
// }

//Usuario

// Usuario.create({
//     nome: 'Ana Julia',
//     email: 'anaju@digitalhouse.com',
//     senha: 'jujuba123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

//  Usuario.create({
//      nome: 'Brena M',
//      email: 'nana@digitalhouse.com',
//      senha: 'nenamaluquinha123'
//  }).then((resultado) => {
//      console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Mariana Rebolsas',
//     email: 'mariana@digitalhouse.com',
//     senha: 'maricontaai123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Bartolomeu',
//     email: 'nat@digitalhouse.com',
//     senha: 'bartototo123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Edson Oliveira',
//     email: 'edson@digitalhouse.com',
//     senha: 'somsom123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'João Victor',
//     email: 'nat@digitalhouse.com',
//     senha: 'gatinho123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.create({
//     texto: 'testando123',
//     usuarios_id: 6,
//     n_likes: 100
// }).then((resultado) => {
// console.log(resultado.toJSON());
// });

//  Usuario.update({
//      email: 'sergio@digitalhouse.com'
//  }, {
//      where: {
//          id:2
//      }
// }).then((resultado) => {
//      console.log(resultado);
//  });

//  Usuario.destroy({
//      where: {
//          id: 3
//      }
//  }).then((resultado) => {
//      console.log(resultado);
//  })


// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })


// Usuario.findAll().then((usuarios) => {
//     console.log(usuarios.map((usuario) => usuario.toJSON()));
// })

// Usuario.findByPk(1, { include: ['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include:['comentarios']}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)