import './App.css';
import Header from './components/Header';
import Mugs from './components/Mugs';
import app from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './service/firebaseConfig';

const fbApp = app.initializeApp(firebaseConfig);
const mugsRef = fbApp.database().ref().child('mugs'); 
function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
        <Mugs mugsRef={mugsRef} />
    </div>
  );
}

export default App;
