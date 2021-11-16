const { Seeder } = require('mongo-seeding');
const path = require('path');

const db = "mongodb://localhost:27017/Connectors";

const config = {
  database: db,
  dropDatabase: false,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve('./seeders'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  }
);

seeder.import(collections).then(() => {
    console.log('Success Seeders Run');
  }).catch(err => {
    console.log('Error', err);
  });