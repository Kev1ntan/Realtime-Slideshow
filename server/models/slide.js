'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slide = sequelize.define('Slide', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    current: DataTypes.BOOLEAN,
  }, {});
  Slide.associate = function(models) {
    // associations can be defined here
  };
  return Slide;
};