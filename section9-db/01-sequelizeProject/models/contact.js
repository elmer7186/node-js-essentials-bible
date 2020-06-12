'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};