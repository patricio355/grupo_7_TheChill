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
            type: DataTypes.TEXT,
        },
        type:{
            type: DataTypes.SMALLINT,
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
        userId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "product",
        timestamps: false,
    }
    )
    return Product;
}