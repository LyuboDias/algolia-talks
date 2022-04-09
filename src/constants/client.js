import algoliasearch from 'algoliasearch/lite';

const SEARCH_CLIENT = algoliasearch(
    `${process.env.REACT_APP_API_ID}`,
    `${process.env.REACT_APP_API_KEY}`
);

export default SEARCH_CLIENT;
