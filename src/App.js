import './App.css';
import BackGround from './Component/background.component';
import Header from './Component/header.component';
import Main from './Component/main.component';
import Profile from './Component/profile.component.';

function App() {
  const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };
  
  return (
    <div className="wrapper">
      <Header scrollToSection={scrollToSection} />
      <BackGround/>
      <Profile/>
      <Main scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
