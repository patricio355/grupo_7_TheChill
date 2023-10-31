module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        first_name:{
            type: DataTypes.STRING,
        },
        last_name:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        passwordHash:{
            type: DataTypes.STRING,
        },
        admin:{
            type: DataTypes.BOOLEAN,
        },
        vendor:{
            type: DataTypes.BOOLEAN,
        },
        intro:{
            type: DataTypes.TEXT,
        },
        profile:{
            type: DataTypes.TEXT,
        }
    },
    {
        tableName: "user",
        timestamps: false,
    }
    )
    return User;
}