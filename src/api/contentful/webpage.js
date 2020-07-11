const { getEntries } = require('./client');

const getWebPage = async (uri) => {
  try {
    const page = await getEntries({
      'content_type': 'webPage',
      'fields.uri': uri,
      include: 2,
      limit: 1
    });

    return page.items[0];
  }
  catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  getWebPage
};
