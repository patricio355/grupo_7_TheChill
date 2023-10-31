module.exports = (sequelize, DataTypes) => {
    const Product_Tag = sequelize.define("Product_Tag", {
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
        tagId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "product_tag",
        timestamps: false,
    }
    )
    return Product_Tag;
}