// import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import BlogList from "./Components/BlogList";
import Footer from "./Components/Footer";
import { Container } from "./StyleComponents/styled";

function App() {
  return (
    <Container className="fashion-bog-app">
      <Header />
      <NavBar />
      <BlogList />
      <Footer />
    </Container>
  );
}

export default App;
