(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(37),c=t.n(l),i=(t(87),t(24)),s=t(74),o=t(140),u=t(142),m=t(72),E=t(77),f=t(141),h=t(144),b=t(145),d=t(143),p=t(55),v=t.n(p),g=(t(100),t(78)),w=t.n(g)()("".concat("003N4UJ8IO"),"".concat("0b938c3203a4cf353b181db5cf2ec3d8")),N=t(139);function k(e){var a=Object(n.useRef)(null);return Object(n.useEffect)(function(){if(a.current){var t=Object(N.a)(Object(i.a)({container:a.current,renderer:{createElement:n.createElement,Fragment:n.Fragment,render:l.render}},e));return function(){t.destroy()}}},[]),r.a.createElement("div",{ref:a})}var y=t(57),S=t.n(y),_=t(79),O=t.n(_),j=t(41),T=t.n(j);var M=function(e){return r.a.createElement("article",null,r.a.createElement("h1",null,r.a.createElement(T.a,{attribute:"speakers",hit:e.hit,highlightPreTag:!0}),"\xa0\xa0",r.a.createElement(T.a,{attribute:"name",hit:e.hit})),r.a.createElement("br",null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("img",{src:e.hit.image_url,alt:e.hit.name,className:"hit_image"})),r.a.createElement(T.a,{attribute:"description",hit:e.hit})),r.a.createElement("p",{className:"views"},"\ud83d\udc40 ",e.hit.viewed_count,"\xa0 \ud83d\udc4d\ud83c\udffb ",e.hit.popularity_score,"\xa0"))},q=Object(m.a)(function(){return null});function C(e){return v.a.stringify(e,{addQueryPrefix:!0})}var R=function(){var e=r.a.useState(function(){return function(e){var a=e.search;return v.a.parse(a.slice(1))}(window.location)}),a=Object(s.a)(e,2),t=a[0],n=a[1],l=r.a.useRef(null),c=r.a.useState(!1),m=Object(s.a)(c,2),p=m[0],g=m[1];r.a.useEffect(function(){clearTimeout(l.current),l.current=setTimeout(function(){window.history.pushState(t,null,function(e,a){var t=e.location;return 0===Object.keys(a).length?"":"".concat(t.pathname).concat(C(a))}({location:window.location},t))},400)},[t]);var N=r.a.useCallback(function(e){var a=e.state;n(function(e){return Object(i.a)({},e,{query:a.query})})},[]),y=r.a.useCallback(function(){n(function(e){return Object(i.a)({},e,{query:""})})},[]),_=r.a.useMemo(function(){var e=Object(o.a)({key:"search",limit:5,transformSource:function(e){var a=e.source;return Object(i.a)({},a,{onSelect:function(e){n(function(a){return Object(i.a)({},a,{query:e.item.label})})}})}});return Object(u.a)({SEARCH_CLIENT:w,indexName:"Talks_query_suggestions",getSearchParams:function(){return e.data.getAlgoliaSearchParams({hitsPerPage:5})},transformSource:function(e){var a=e.source;return Object(i.a)({},a,{onSelect:function(e){n(function(a){return Object(i.a)({},a,{query:e.item.query})})}})}}),[e]},[]);return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("img",{src:"/navbar.png",alt:"navbar",className:"navbar-img"}),r.a.createElement("img",{src:"/mobile-navbar.png",alt:"mobile-navbar",className:"mobile-navbar"})),r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{searchClient:w,indexName:"Talks",searchState:t,onSearchStateChange:n,createURL:C},r.a.createElement("div",{className:"search-panel"},r.a.createElement("div",{className:"search-panel__filters hidden"},r.a.createElement(S.a,null),r.a.createElement("h3",null,"Tags"),r.a.createElement(f.a,{attribute:"tags",searchable:!0,showMore:!0,limit:5}),r.a.createElement("h3",null,"Events"),r.a.createElement(f.a,{attribute:"event_name",showMore:!0,limit:5}),r.a.createElement("h3",null,"Speakers"),r.a.createElement(f.a,{attribute:"speakers",showMore:!0,limit:5})),r.a.createElement("div",{className:"search-panel__results"},r.a.createElement(k,{placeholder:"Search for TED Talk, Speaker or specific word...",detachedMediaQuery:"none",initialState:{query:t.query},openOnFocus:!0,onSubmit:N,onReset:y,plugins:_}),r.a.createElement(q,null),r.a.createElement("div",{className:"stats-wrapper"},r.a.createElement("h2",{className:"talks"},"Talks"),r.a.createElement(O.a,null)),r.a.createElement("div",{className:"sort-by"},p?r.a.createElement("p",{onClick:function(){return g(function(e){return!e})},className:"dropbtn"},"Hide Filters"):r.a.createElement("p",{onClick:function(){return g(function(e){return!e})},className:"dropbtn"},"Show Filters"),r.a.createElement(h.a,{defaultRefinement:"Talks",items:[{value:"Talks",label:"Most Relevant"},{value:"Talks_popularity_score_desc",label:"Highest Rated"},{value:"Talks_viewed_count_desc",label:"Most Views"}]})),p?r.a.createElement("div",{className:"search-panel__filters"},r.a.createElement(S.a,null),r.a.createElement("h3",null,"Tags"),r.a.createElement(f.a,{attribute:"tags",searchable:!0,showMore:!0,limit:5}),r.a.createElement("h3",null,"Events"),r.a.createElement(f.a,{attribute:"event_name",showMore:!0,limit:5}),r.a.createElement("h3",null,"Speakers"),r.a.createElement(f.a,{attribute:"speakers",showMore:!0,limit:5})):"",r.a.createElement(b.a,{hitComponent:M}),r.a.createElement("div",{className:"pagination"},r.a.createElement(d.a,{showLast:!0,showPrevious:!1,showNext:!1,padding:2})))))),r.a.createElement("div",{className:"sticky-div"},r.a.createElement("img",{src:"/arrow.png",alt:"arrow",className:"arrow"}),r.a.createElement("p",{className:"feed"},"New! Activity Feed")),r.a.createElement("footer",null,r.a.createElement("img",{src:"/footer.png",alt:"footer",className:"footer-img"}),r.a.createElement("img",{src:"/mobile-footer-top.png",alt:"footer",className:"mobile-footer"}),r.a.createElement("img",{src:"/mobile-footer-bottom.png",alt:"footer",className:"mobile-footer"})))};c.a.render(r.a.createElement(R,null),document.getElementById("root"))},82:function(e,a,t){e.exports=t(129)},87:function(e,a,t){},98:function(e,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.8fdc4ebe.chunk.js.map