// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import ConditionalRoute from './routes/conditionalRoute';
import UserNavBar from './component/navigation/userNavBar';
function App() {
  return (
    <div className="App">
      {/* Hello My App */}
      <UserNavBar/>
        <Routes>
          <Route path='/' element={<ConditionalRoute/>} />
        </Routes>
      </div>
  );
} 
export default App;
