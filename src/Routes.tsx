import { Route, Switch } from 'react-router-dom';
import Upload from './components/upload/Upload';
import Results from './components/results/Results';
import NotFound from './components/404/NotFound';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Upload} />
			<Route exact path='/results' component={Results} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
};

export default Routes;
