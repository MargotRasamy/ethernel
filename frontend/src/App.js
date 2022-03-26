import './styles/main.scss';
import LandingPage from './components/landing-page/LandingPage';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Header from './components/Header';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/quiz/:manga" component={QuizPage} /> */}
          <Route exact path="/" element={<LandingPage/>} />
          <Route path='/404' exact={true} element={<Error404/>} />
          <Route
              path="*"
              element={<Navigate to="/404" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
