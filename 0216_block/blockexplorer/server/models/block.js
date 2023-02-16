const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        BlockInfo: {
          type: Sequelize.STRING(10000),
        },
      },
      {
        sequelize,
        modelName: "Block",
        tableName: "block",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
  // static associate(db) {
  //   db.Board.belongsTo(db.User);
  // }
};
