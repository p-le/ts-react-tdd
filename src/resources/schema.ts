export const typeDefs = `
    type Channel {
        id: ID!
        name: string
    }

    type Query {
        channels: [Channel]
    }
`;
