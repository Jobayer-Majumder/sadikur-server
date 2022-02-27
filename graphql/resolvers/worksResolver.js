const {
    GraphQLUpload,
  } = require('graphql-upload');
const worksModel = require('../../models/worksModel');


const resolvers = {
    Query: {
        works: async () => {
            try {
                const works = await worksModel.find({});
                return works
            } catch (error) {
                throw new Error('something wrong with finding data')
            }
        },
        worksByCategory: async (parent, { category }) => {
            let query = {};

            try {
                if (category === 'all') {
                    query = {}
                } else {
                    query = { category: category }
                }
                const works = await worksModel.find(query)
                return works

            } catch (error) {
                throw new Error('something wrong with finding data')
            }

        },
    },
    Mutation: {
        addWorks: async (parent, args) => {
            const { title, description, category, file } = args.input;

            console.log(args)

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
        },
    },

};


module.exports = resolvers