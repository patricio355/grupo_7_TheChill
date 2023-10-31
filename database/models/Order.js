module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
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
        subTotal:{
            type: DataTypes.FLOAT,
        },
        itemDiscount:{
            type: DataTypes.FLOAT,
        },
        tax:{
            type: DataTypes.FLOAT,
        },
        shipping:{
            type: DataTypes.FLOAT,
        },
        total:{
            type: DataTypes.FLOAT,
        },
        promo:{
            type: DataTypes.STRING,
        },
        discount:{
            type: DataTypes.FLOAT,
        },
        grandTotal:{
            type: DataTypes.FLOAT,
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
        tableName: "order",
        timestamps: false,
    }
    )
    return Order;
}