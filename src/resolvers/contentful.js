module.exports = {
  WebPage: {
    id: (data) => data.sys.id,
    title: (data) => data.fields.title,
    uri: (data) => data.fields.uri,
    pageTitle: (data) => data.fields.pageTitle,
    pageDescription: (data) => data.fields.pageDescription,
    content: (data) => data.fields.content
  },
  RichTextBody: {
    id: (data) => data.sys.id,
    title: (data) => data.fields.title,
    body: () => null
  },
  MarkdownBody: {
    id: (data) => data.sys.id,
    title: (data) => data.fields.title,
    body: (data) => data.fields.body
  },
  PageContent: {
    __resolveType(obj, context, info) {
      const type = obj.sys.contentType.sys.id;
      if(type === 'richTextBody') return 'RichTextBody';
      if(type === 'markdownBody') return 'MarkdownBody';
      if(type === 'heroBlock') return 'HeroBlock';
    }
  }
};
