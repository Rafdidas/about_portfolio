import './App.css';
import Header from './Component/header';
import Main from './Component/main';
import Profile from './Component/profile';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Profile/>
      <Main/>
    </div>
  );
}

export default App;
