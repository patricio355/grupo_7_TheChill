module.exports = (sequelize, DataTypes) => {
    const Order_Item = sequelize.define("Order_Item", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        sku:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.FLOAT,
        },
        discount:{
            type: DataTypes.FLOAT,
        },
        quantity:{
            type: DataTypes.SMALLINT,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        content:{
            type: DataTypes.TEXT,
        },
        orderId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        },
        productId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "order_item",
        timestamps: false,
    }
    )
    return Order_Item;
}