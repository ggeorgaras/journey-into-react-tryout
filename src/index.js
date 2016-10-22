import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.querySelector('#app'));  
