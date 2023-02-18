import logo from './logo.svg';

import Navbar from './pages/navabr/Navbar';
import Hero from './pages/hero/Hero';
import Slide from './pages/slide/Slide';
import Hover from './pages/hover/Hover';
import Review1 from './pages/review/Review1';
import Features from './features/Features';
import Review2 from './pages/review/Review2';
import Review3 from './pages/review/Review3';
import Grid from './grid/Grid';
import Review5 from './pages/review/Review5';
import CenterLogo from './centerlogo/CenterLogo';
import Review4 from './pages/review/Review4';
import Certificate from './pages/CERTFICATE/Certificate';
import Award from './pages/Award/Award';
import Question from './pages/Question/Question';
import Customer from './pages/customer/Customer';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Slide></Slide>
      <Hover></Hover>
      <Review1></Review1>
      <Features></Features>
      <Review2></Review2>
      <Review3></Review3>
      <Grid></Grid>
      <Review5></Review5>
      <CenterLogo></CenterLogo>
      <Review4></Review4>
      <Certificate></Certificate>
      <Award></Award>
      <Question></Question>
      <Customer></Customer>
      <Footer></Footer>
    </div>
  );
}

export default App;
