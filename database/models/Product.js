module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
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
        summary:{
            type: DataTypes.TEXT,
        },
        type:{
            type: DataTypes.SMALLINT,
        },
        slug:{
            type: DataTypes.STRING,
        },
        sku:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.FLOAT,
        },
        size:{
            type: DataTypes.STRING,
        },
        brand:{
            type: DataTypes.STRING,
        },
        // category:{
        //     type: DataTypes.STRING,
        // },
        gender:{
            type: DataTypes.STRING,
        },
        model_name:{
            type: DataTypes.STRING,
        },
        colour:{
            type: DataTypes.STRING,
        },
        image:{
            type: DataTypes.STRING,
        },
        discount:{
            type: DataTypes.FLOAT,
        },
        quantity:{
            type: DataTypes.SMALLINT,
        },
        shop:{
            type: DataTypes.BOOLEAN,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        publishedAt:{
            type: DataTypes.DATE,
        },
        startsAt:{
            type: DataTypes.DATE,
        },
        endsAt:{
            type: DataTypes.DATE,
        },
        content:{
            type: DataTypes.TEXT,
        },
        // userId:{
        //     type: DataTypes.BIGINT,
        //     foreignKey: true,
        //     unique: true,
        // }
    },
    {
        tableName: "product",
        timestamps: false,
    });
    
    Product.associate = (models) => {
        Product.belongsToMany(models.Category, {
            as:"categories",
            through: 'product_category',    
            onDelete: 'CASCADE',         
        }); 
        Product.hasMany(models.Cart_Item, { foreignKey: 'productId' });
        Product.hasMany(models.Order_Item, { foreignKey: 'productId' });
    };
    return Product;
}
