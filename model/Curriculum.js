const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const Curriculum = sequelize.define('curriculum', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  education: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'curriculum', 
});

module.exports = Curriculum;
