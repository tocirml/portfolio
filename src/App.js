import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <Header />
      <main className="text-center main">
        <Container className="mt-5">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/education" component={EducationPage} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
