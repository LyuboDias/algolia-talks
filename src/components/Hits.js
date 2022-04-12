import React, { Suspense } from 'react';
import Highlight from 'react-instantsearch-dom/dist/cjs/widgets/Highlight';
import PropTypes from 'prop-types';
// const Highlight = React.lazy(() => import('react-instantsearch-dom/dist/cjs/widgets/Highlight'));

function Hit(props) {
  return (
    <article>
        <h1>
          <Highlight attribute="speakers" hit={props.hit} highlightPreTag />
          &nbsp;&nbsp;
          <Highlight attribute="name" hit={props.hit} />
        </h1>
        <br />
        <div className="wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            <img
            src={props.hit.image_url}
            alt={props.hit.name}
            className="hit_image"
          />
          </Suspense>
          <Highlight attribute="description" hit={props.hit} />
        </div>
        <p className="views">
          👀 {props.hit.viewed_count}&nbsp;
          👍🏻 {props.hit.popularity_score}&nbsp;
        </p>
      </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
