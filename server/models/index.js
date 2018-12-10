const school = require('./school');
const company = require('./company');
const girl = require('./girl');
const registration = require('./registration');
const work_experience = require('./work_experience');
const jobs = require('./jobs');

const connection = require('./connection');

school.hasMany(girl, { foreignKey: 'school_id' });
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


module.exports = {
  company,
  girl,
  registration,
  school,
  work_experience,
  connection,
};
