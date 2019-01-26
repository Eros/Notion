const mongo, {ObjectID} = require('mongodb');

module.exports = function(mongoCollection) {
    
    mongoCollection.utils = {
        get: function(query, fields) {
            if(Array.isArray(fields)) {
                const f = fields;
                fields = {};
                f.forEach((field) => fields[field] = 1);
            }
            return mongoCollection.findOne(query, {fields}); 
        },

        create: function(doc) {
            doc.createAt = new Date();
            doc.updateAt = new Date();
            mongoCollection.insertOne(doc);
            return doc;
        },

        update: function(query, doc) {
            doc.updateAt = new Date();
            const set = {
                $set: doc
            }
            const result = mongoCollection.findOneAndUpdate(query, set, { returnOriginal: false});
            return result.value;
        },

        remove: function(query) {
            const result = mongoCollection.deleteOne(query);
            return !!result.deletedCount;
        },

        find: function(query, options) {
            const cursor = mongoCollection.find(query);
            options = options || { };

            if(Array.isArray(options.field)) {
                const fields = options.fields;
                options.fields = { };
                fields.forEach((f) => options.fields[f] = 1);
            }
            return cursor;
        },
        printCollection: function(collection) {
            collection = mongo.collection(collection);
            collection.find({}).toArray(function(err, docs) {
                console.log(docs);
            });
        }
    }

    return mongoCollection;
}
