module.exports = (sequelize, DataTypes) => {
    const Cart_Item = sequelize.define("Cart_Item", {
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
        active:{
            type: DataTypes.BOOLEAN,
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
        productId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        },
        cartId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "cart_item",
        timestamps: false,
    }
    );
    // Relación con la tabla User y Product
    Cart_Item.associate = (models) => {
        Cart_Item.belongsTo(models.Cart, { foreignKey: 'cartId' });
        Cart_Item.hasOne(models.Product, { foreignKey: 'id' });
    }
    return Cart_Item;
}