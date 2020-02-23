'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Slides', [{
          name: 'nature',
          url: 'https://www.itl.cat/pngfile/big/0-2844_1920x1080-hd-wallpapers-for-windows-unique-hd-wallpapers.jpg',
          current: true,
          createdAt: new Date,
          updatedAt: new Date,
        },
        {
          name: 'nature',
          url: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          current: false,
          createdAt: new Date,
          updatedAt: new Date,
        },
        {
          name: 'nature',
          url: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          current: false,
          
          createdAt: new Date,
          updatedAt: new Date,
        },
        {
          name: 'nature',
          url: 'https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          current: false,
          
          createdAt: new Date,
          updatedAt: new Date,
        },
        {
          name: 'nature',
          url: 'https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          current: false,
          
          createdAt: new Date,
          updatedAt: new Date,
        }
      
      
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Slides', null, {});
  }
};
