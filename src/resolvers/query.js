const contentful = require('../api/contentful/webpage');

module.exports = {
  Query: {
    webPage: async (_, { uri }) => {
      return contentful.getWebPage(uri);
    }
  }
};
