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
        const works = new worksModel({
            title: args.input.title,
            category: args.input.category,
            file: args.input.file,
            publishDate: args.input.publishDate
        })
        try {
            const result = await works.save();
            return result
        } catch (error) {
            throw new Error('something wrong with database')
        }

    }

};


