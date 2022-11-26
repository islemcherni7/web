module.exports=(sequelize, DataTypes)=>{
    const Institut= sequelize.define('Institut',{
     id_inst:{
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

    return Institut;
};
