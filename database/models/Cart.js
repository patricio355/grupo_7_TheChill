module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        sessionId:{
            type: DataTypes.STRING,
        },
        token:{
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.SMALLINT,
        },
        first_name:{
            type: DataTypes.STRING,
        },
        middleName:{
            type: DataTypes.STRING,
        },
        last_name:{
            type: DataTypes.STRING,
        },
        mobile:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        city:{
            type: DataTypes.STRING,
        },
        province:{
            type: DataTypes.STRING,
        },
        country:{
            type: DataTypes.STRING,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        content:{
            type: DataTypes.TEXT,
        }
    },
    {
        tableName: "cart",
        timestamps: false,
    }
    )
    return Cart;
}