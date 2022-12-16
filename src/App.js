import './App.css';
import Profile from './profile/Profile';

function App() {
  var FullName = "Yassine"
  var bio = "Batal"
  var profession = 'Uber'
  const handleAlert =(a)=> alert(`Hello ${a}`)
  return (
    <div>
     <Profile FullName={FullName} bio={bio} profession={profession} handleAlert={handleAlert}>
        <h5>Mahmoud</h5>
        <img src='/logo192.png' alt='NotFound'/>
      </Profile>         
    </div>
  );
}

export default App;
