module.exports = (sequelize, DataTypes) => {
    const Product_Category = sequelize.define("Product_Category", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        productId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        },
        categoryId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "product_category",
        timestamps: false,
    }
    )
    return Product_Category;
}