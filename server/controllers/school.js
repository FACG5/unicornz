const { school } = require('../models')

const getSchoolsList = (request, response) =>{
    school.findAll().then(res =>{
        let options = [];
        res.forEach(elem => {
            options.push({value:elem.dataValues.id, label: elem.dataValues.name})
        });
        response.json(options);
    })
    .catch(err=>response.json(err))
}

module.exports = {getSchoolsList};
