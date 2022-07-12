import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <AboutIconLink />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header text="Header text" />
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
              </>
            }
          ></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
