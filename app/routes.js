import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import indexPage from './containers/indexPage';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={indexPage} />
		<Route path="/about" component={About} />
	</Route>
);
