module.exports = (sequelize, DataTypes) => {
    const Product_Review = sequelize.define("Product_Review", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
        },
        rating:{
            type: DataTypes.SMALLINT,
        },
        published:{
            type: DataTypes.BOOLEAN,
        },
        publishedAt:{
            type: DataTypes.DATE,
        },
        content:{
            type: DataTypes.TEXT,
        },
        productId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "product_review",
        timestamps: false,
    }
    )
    return Product_Review;
}