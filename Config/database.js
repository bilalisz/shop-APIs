const Sequelize = require('sequelize');
const connection = new Sequelize('card_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

User = connection.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    address: Sequelize.STRING,
});
Post = connection.define('Posts', {
    title: Sequelize.TEXT,
    description: Sequelize.STRING,
});

User.hasMany(Post);

connection
    .sync({
        force: true,
    })
    .then(() => {
        User.create({
            name: 'jalal',
            email: 'jalal@gamil.com',
            password: 'jalal',
            address: 'buner',
        });
    })
    .then(() => {
        console.log('connection is successfully done !');
    })
    .catch(err => {
        console.error('unable to connect with database ', err);
    });

module.exports = connection;