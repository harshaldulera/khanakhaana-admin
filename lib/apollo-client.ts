import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'https://graphql.hasura.whatever', //will update later
    headers: {
        'x-hasura-admin-secret': 'admin secret' // later update
    }
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});