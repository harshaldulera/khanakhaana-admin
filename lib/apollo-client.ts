import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Get Hasura admin secret
const HASURA_ADMIN_SECRET = 'AWkCrsqTzpi6Okx04n526A1YVSOivw2fFW7shcOeyoPCnoCDMbIYzkt0IpjfRVZm';

const httpLink = createHttpLink({
  uri: 'https://khanakhajana.hasura.app/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      'x-hasura-admin-secret': HASURA_ADMIN_SECRET
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client; 