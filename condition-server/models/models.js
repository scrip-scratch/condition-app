const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    }
})

const Note = sequelize.define('note', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
    }
})

const Chart = sequelize.define('chart', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }
})

const ChartValue = sequelize.define('chartValue', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    phis: {
        type: DataTypes.INTEGER,
    },
    emo: {
        type: DataTypes.INTEGER,
    },
    soul: {
        type: DataTypes.INTEGER,
    }
})

User.hasOne(Chart);
Chart.belongsTo(User);

User.hasMany(Note);
Note.belongsTo(User);

Chart.hasMany(ChartValue);
ChartValue.belongsTo(Chart);

module.exports = {
    User, Note, Chart, ChartValue
}