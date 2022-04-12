import React from 'react';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import {
  connectSearchBox,
  InstantSearch,
  Hits,
  SortBy,
  RefinementList,
  Pagination,
} from 'react-instantsearch-dom';
import qs from 'qs';

import './App.css';
import SEARCH_CLIENT from './constants/client';
import { Autocomplete } from './components/Autocomplete.jsx';
import ClearRefinements from 'react-instantsearch-dom/dist/cjs/widgets/ClearRefinements';
import Stats from 'react-instantsearch-dom/dist/cjs/widgets/Stats';
import Hit from './components/Hits';

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
  const [dropDown, setDropDown] = React.useState(false);

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
      limit: 5,
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

    const querySuggestionsPlugin = createQuerySuggestionsPlugin({
      SEARCH_CLIENT,
      indexName: 'Talks_query_suggestions',
      getSearchParams() {
        return recentSearchesPlugin.data.getAlgoliaSearchParams({
          hitsPerPage: 5,
        });
      },
      transformSource({ source }) {
        return {
          ...source,
          onSelect(params) {
            setSearchState(searchState => ({
              ...searchState,
              query: params.item.query,
            }));
          },
        };
      },
    }); 
  
    return [
      recentSearchesPlugin,
      // querySuggestionsPlugin
    ];
  }, []);


  return (
    <div>
      <header>
        <img src="assets/navbar.png" alt="navbar" className="navbar-img" />
        <img src="assets/mobile-navbar.png" alt="mobile-navbar" className="mobile-navbar" />
      </header>
      <div className="container">
        <InstantSearch
          searchClient={SEARCH_CLIENT}
          indexName="Talks"
          searchState={searchState}
          onSearchStateChange={setSearchState}
          createURL={createURL}
        >
          <div className="search-panel">
            <div className="search-panel__filters hidden">
              <ClearRefinements />
              <h3>Tags</h3>
              <RefinementList attribute="tags" searchable showMore limit={5} />
              <h3>Events</h3>
              <RefinementList attribute="event_name" showMore limit={5} />
              <h3>Speakers</h3>
              <RefinementList attribute="speakers" showMore limit={5} />
            </div>
            <div className="search-panel__results">
              {/* <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              /> */}
              <Autocomplete
                placeholder="Search for TED Talk, Speaker or specific word..."
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
              <div className="stats-wrapper">
                <h2 className="talks">Talks</h2>
                <Stats />
              </div>
              <div className="sort-by">
                {dropDown ?
                  <p onClick={() => setDropDown((dropDown) => !dropDown)} className="dropbtn">Hide Filters</p>
                : 
                  <p onClick={() => setDropDown((dropDown) => !dropDown)} className="dropbtn">Show Filters</p>
                }
                <SortBy 
                  defaultRefinement="Talks"
                  items={[
                    {value: 'Talks', label: 'Most Relevant'},
                    {value: 'Talks_popularity_score_desc', label: 'Highest Rated'},
                    {value: 'Talks_viewed_count_desc', label: 'Most Views'},
                  ]}
                />
              </div>
              {dropDown ? 
                <div className="search-panel__filters">
                  <ClearRefinements />
                  <h3>Tags</h3>
                  <RefinementList attribute="tags" searchable showMore limit={5} />
                  <h3>Events</h3>
                  <RefinementList attribute="event_name" showMore limit={5} />
                  <h3>Speakers</h3>
                  <RefinementList attribute="speakers" showMore limit={5} />
                </div>
              :
                ''
              }
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination showLast  showPrevious={false} showNext={false} padding={2} />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
      {/* sticky div */}
      <div className="sticky-div">
        <img src="assets/arrow.png" alt="arrow" className="arrow" />
        <p className="feed">New! Activity Feed</p>
      </div>
      <footer>
        <img src="assets/footer.png" alt="footer" className="footer-img" />
        <img src="assets/mobile-footer-top.png" alt="footer" className="mobile-footer" />
        <img src="assets/mobile-footer-bottom.png" alt="footer" className="mobile-footer" />
      </footer>
    </div>
  );
}

export default App;
