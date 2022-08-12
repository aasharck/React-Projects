import '../styles/globals.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}


export default wrapper.withRedux(MyApp);
