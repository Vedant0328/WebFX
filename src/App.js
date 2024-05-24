import Challenge from './components/Challenge';
import Footer from './components/Footer';
import Social from './components/Social';

function App() {
  return (
    <div class='bg-slate-800 px-10 overflow-x-hidden'>
      <Challenge />

      <hr class='h-1 mx-6' />
      <Footer />
      <hr class='h-1 mx-6' />

      <Social />
    </div>
  );
}

export default App;
