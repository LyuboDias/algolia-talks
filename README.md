## Welcome to Algolia-Talks
## To install all dependancy 

### Run 'npm install' 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### Dataset sourse
https://github.com/algolia/datasets/tree/master/tedtalks


## Some of the packages used:

- Algolia Autocomplete
- Algolia search
## Description

I have build this simple app using Algolia Instant Search and Autocomplete. It replicates TED Talks.
Here are some of the key points:

- Recent search history
- Searchable attributes: Name, Speaker, Description and Event.
- Filters for Tags, Events and Speakers.
- Pagination limited to 1k Hits.
- SortBy: Most Views and Best Rated
- Mobile responsive with filters menu toggled
- Added A/B testing ( PopularScore vs ViewedCount )
## Known Bugs 🐞 and Enhancements:

- Tags filters search bar not working :/
- Need styling changes throughout the page to reflect real TED website
- Main search bar doesnt have query suggestions
- Every Hit should be clickable and take user to Hit page with fill information
- On mobile when show filters and apply some, will reset if close the filters menu
- Index of query_suggestions has 17 records but has not been implemented into Main search bar
- Code base need refactoring ( + add SasS )

