const slugify = require('slugify');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.title) {
                data.key = slugify(data.title, { lower: true });
            }
        },
        beforeUpdate: async (params, data) => {
            if (data.title) {
                data.key = slugify(data.title, { lower: true });
            }
        },
    },
};

