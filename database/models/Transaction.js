module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("Transaction", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        code:{
            type: DataTypes.STRING,
        },
        type:{
            type: DataTypes.SMALLINT,
        },
        mode:{
            type: DataTypes.SMALLINT,
        },
        status:{
            type: DataTypes.SMALLINT,
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
        userId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        },
        orderId:{
            type: DataTypes.BIGINT,
            foreignKey: true,
            unique: true,
        }
    },
    {
        tableName: "transaction",
        timestamps: false,
    }
    )
    Transaction.associate = (models) => {
        Transaction.hasOne(models.User, { foreignKey: 'id' });
    };
    return Transaction;
}