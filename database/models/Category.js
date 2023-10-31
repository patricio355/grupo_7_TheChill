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
    )
    return Category;
}