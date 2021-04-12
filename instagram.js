const { Usuario, Post, Comentario, sequelize} = require('./models');

Usuario.findAll({
    where:{
        nome: {[Op.like]: '%a%'}
    }
})
.then ((resultado) => {
    console.table(resultado.map(user => user.toJSON())); 
});

Usuario.findAll({
    where:{
        nome: {[Op.notLike]: '%a%'}
    }
})
.then ((resultado) => {
    console.table(resultado.map(user => user.toJSON())); 
});

Comentario.findAll({
    order:[
        ['id', 'ASC']  
    ],
    limit: 2, 
    offset: 2
})
.then ((resultado) => {
    console.table(resultado.map(user => user.toJSON())); 
});
