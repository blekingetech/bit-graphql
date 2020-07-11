const { gql } = require('apollo-server');
const contentfulTypeDefs = gql`
    type WebPage {
        id: ID!
        title: String
        uri: String
        pageTitle: String
        pageDescription: String
        content: [PageContent]
    }

    union PageContent = HeroBlock
    
    type HeroBlock {
        id: ID!
        title: String
        image: Image
    }

    type Image {
        id: ID!
        url: String
        title: String
        description: String
        height: Int
        width: Int
        fileType: String
        fileSize: Int
    }
`;

module.exports = contentfulTypeDefs;
