const worksModel = require('../../models/worksModel');


module.exports = {
    works: async () => {
        try {
            const works = await worksModel.find()
            return works
        } catch (error) {
            throw new Error('something wrong with finding your query')
        }
    },
    
    addWorks: async args => {
        const {title, description, category, file} = args.input;

        const works = new worksModel({
            title: title,
            description: description,
            category: category,
            file: file,
        })
        try {
            const result = await works.save();
            return result
        } catch (error) {
            throw new Error('something wrong with database')
        }
    }

};


