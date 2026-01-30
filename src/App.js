
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="">
      
      <Head/>
      <Body/>
      {
        /**
         * Head
         * Body
         *  Sidebar
         *    MenuItem
         *  MainContainer
         *    ButtonList
         *    VideoContainer   
         */
      }
    </div>
    </Provider>
  );
}

export default App;
