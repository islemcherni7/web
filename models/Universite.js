module.exports=(sequelize, DataTypes)=>{
    const Universite= sequelize.define('Universite',{
     id_univ:{
        type: DataTypes.number,
        allowNull: false

     },
     nom:{
        type: DataTypes.STRING,


     },
     adresse:{
        type: DataTypes.STRING,


     },

     ville:{
        type: DataTypes.STRING,


     },

     codep:{
        type: DataTypes.number,

     },



    });

    return Universite;
};
