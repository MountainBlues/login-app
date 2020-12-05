import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes/Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
