const { company } = require('../models')

exports.getCompaniesList = (request, response) =>{
    company.findAll().then(res =>{
        let options = [];
        res.forEach(elem => {
            options.push({value:elem.dataValues.id, label: elem.dataValues.company_name})
        });
        response.json(options);
    })
    .catch(err=>response.json(err))
}