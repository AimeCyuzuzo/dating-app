import Home from './Home/Home';
import logo from './logo.svg';
import SignIn from './SignIn/SignIn';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from './components/NotFound';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path='/create-account' element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
    </div>
  );
}

export default App;
