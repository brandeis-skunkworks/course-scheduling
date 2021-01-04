// Example model


module.exports = (sequelize, DataTypes) => {

  const Professor = sequelize.define('Professor', {
      // professor_id: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING
      },
      name: DataTypes.STRING,
      courses_assigned_id: DataTypes.STRING,
      blocks_available: DataTypes.STRING,
      assigned_blocks: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });
  
    return Professor;
  };
  
  