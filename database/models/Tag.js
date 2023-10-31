module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
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
        tableName: "tag",
        timestamps: false,
    }
    )
    return Tag;
}