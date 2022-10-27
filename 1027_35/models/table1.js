const Sequelize = require("sequelize");
// const { toDefaultValue } = require("sequelize/types/utils");

module.exports = class Table1 extends Sequelize.Model {
  // static => class를 new 하지 않고 메서드를 불러온다.
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER, // INT
          primaryKey: true, // 고유 식별 키인가?
          autoIncrement: true, // index 값 자동 증가
          unique: true, // 값이 중복되면 안된다.
          alloswNull: false, // 비면 안된다.
        },
        name: {
          type: Sequelize.STRING(45), // VARCHAR
          alloswNull: true,
        },
        id: {
          type: Sequelize.STRING(45), // VARCHAR
          alloswNull: true,
        },
        pw: {
          type: Sequelize.STRING(45), // VARCHAR
          alloswNull: true,
        },
      },
      {
        sequelize, // 기본값으로 무조건 넣기
        timestamps: false, // createAt, updateAt 자동으로 추가
        underscored: true, // 테이블과 컬럼명을 카멜 케이스로 수정
        modelName: "New_table", // Javascript에서 사용하는 테이블명
        tableName: "new_table", // MySQL에 있는 테이블명
        paranoid: false, // 삭제 시 deletedAt에 저장할지, 테이블에서 데이터를 삭제 시 완전 삭제할 것인가? 아니면 삭제한 날짜를 남겨 데이터를 남길 것인가?
        charset: "utf8mb4", // 언어 포멧 설정
        collate: "utf8mb4_general_ci", // 언어 포멧 설정
      }
    );
  }

  //   관계되는 내용
  static associate(db) {
    // db.NewTable1
  }
};
