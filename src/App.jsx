import React from 'react';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import {
  connectSearchBox,
  InstantSearch,
  Hits,
  // SearchBox,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import qs from 'qs';
import PropTypes from 'prop-types';
import './App.css';
import SEARCH_CLIENT from './constants/client';
import { Autocomplete } from './components/Autocomplete.jsx';

const VirtualSearchBox = connectSearchBox(() => null);

function createURL(searchState) {
  return qs.stringify(searchState, { addQueryPrefix: true });
}

function searchStateToUrl({ location }, searchState) {
  if (Object.keys(searchState).length === 0) {
    return '';
  }

  return `${location.pathname}${createURL(searchState)}`;
}

function urlToSearchState({ search }) {
  return qs.parse(search.slice(1));
}

function App() {
  const [searchState, setSearchState] = React.useState(() =>
    urlToSearchState(window.location)
  );
  const timerRef = React.useRef(null); 

  React.useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      window.history.pushState(
        searchState,
        null,
        searchStateToUrl({ location: window.location }, searchState)
      );
    }, 400);
  }, [searchState]);

  const onSubmit = React.useCallback(({ state }) => {
    setSearchState(searchState => ({
      ...searchState,
      query: state.query,
    }));
  }, []);

  const onReset = React.useCallback(() => {
    setSearchState(searchState => ({
      ...searchState,
      query: '',
    }));
  }, []);

  const plugins = React.useMemo(() => {
    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: 'search',
      limit: 3,
      transformSource({ source }) {
        return {
          ...source,
          onSelect(params) {
            setSearchState(searchState => ({
              ...searchState,
              query: params.item.label,
            }));
          },
        };
      },
    });
  
    return [
      recentSearchesPlugin,
    ];
  }, []);

  return (
    <div>
      <div className="container">
        <InstantSearch 
          searchClient={SEARCH_CLIENT} 
          indexName="Talks"
          searchState={searchState}
          onSearchStateChange={setSearchState}
          createURL={createURL}
        >
          <div className="search-panel">
            <div className="search-panel__filters">
              <RefinementList attribute="tags" />
            </div>

            <div className="search-panel__results">
              {/* <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              /> */}
              <Autocomplete
                placeholder="Search"
                detachedMediaQuery="none"
                initialState={{
                  query: searchState.query,
                }}
                openOnFocus={true}
                onSubmit={onSubmit}
                onReset={onReset}
                plugins={plugins}
              />
              <VirtualSearchBox />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
