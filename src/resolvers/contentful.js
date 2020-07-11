module.exports = {
  WebPage: {
    id: (data) => data.sys.id,
    title: (data) => data.fields.title,
    uri: (data) => data.fields.uri,
    pageTitle: (data) => data.fields.pageTitle,
    pageDescription: (data) => data.fields.pageDescription,
    content: (data) => data.fields.content
  },
  PageContent: {
    __resolveType(obj, context, info) {
      return  obj.sys.contentType.sys.id || null;
    }
  }
};
