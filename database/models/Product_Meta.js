module.exports = (sequelize, DataTypes) => {
    const Product_Meta = sequelize.define("Product_Meta", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        key:{
            type: DataTypes.STRING,
        },
        content:{
            type: DataTypes.TEXT,
        },
        productId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        },
    },
    {
        tableName: "product_meta",
        timestamps: false,
    }
    )
    return Product_Meta;
}