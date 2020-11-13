module.exports = function(sequelize, Sequelize){
    return sequelize.define('UserInfos',{
        FirstName: {
           type: Sequelize.STRING,
           allowNull: false,
        },
        LastName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        CNIC: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
            
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        PhoneNo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        DOB: {
            type: Sequelize.DATE,
            allowNull: true
        }
    })
    
};