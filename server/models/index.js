const company = require('./company');
const girl = require('./girl');
const registration = require('./registration');
const school = require('./school');
const work_experience = require('./work_experience');

const sequelize = require('./connection');

work_experience.belongsTo(company, {
  onDelete: 'CASCADE', foreignKey: 'company_id', targetKey: 'id',
});
company.hasMany(work_experience, { foreignKey: 'company_id' });

registration.belongsTo(work_experience, {
  onDelete: 'CASCADE', foreignKey: 'work_experience_id', targetKey: 'id',
});
work_experience.hasMany(registration, { foreignKey: 'work_experience_id' });

registration.belongsTo(girl, {
  onDelete: 'CASCADE', foreignKey: 'girl_id', targetKey: 'id',
});
girl.hasMany(registration, { foreignKey: 'girl_id' });

girl.belongsTo(school, {
  onDelete: 'CASCADE', foreignKey: 'school_id', targetKey: 'id',
});
school.hasMany(girl, { foreignKey: 'school_id' });


module.exports = {
  company,
  girl,
  registration,
  school,
  work_experience,
  sequelize,
};