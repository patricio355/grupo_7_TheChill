module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
        },
        metaTitle:{
            type: DataTypes.STRING,
        },
        slug:{
            type: DataTypes.STRING,
        },
        content:{
            type: DataTypes.TEXT,
        }
    },
    {
        tableName: "category",
        timestamps: false,
    }
    );
    // Category.belongsToMany(sequelize.models.Product, {
    //     through: "Product_Category",
    //     foreignKey: "categoryId",  // Nombre de la clave foránea en la tabla ProductCategory que apunta a Product
    // });
    Category.associate =  (models) => {
        Category.belongsToMany(models.Product, {
            through: 'product_category',
            timestamps:false,
            as:"productos"
        });
    };
    return Category;
}