'use strict';
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Page.associate = function(models) {
    // associations can be defined here
  };
  return Page;
};