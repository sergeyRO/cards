import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'

function App() {
 
  return (
    <>
      <Card 
        children = {
            <>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </>
        }
        picture = {
            <img src="http://xn--h1adcxa4d.in.ua/site-images/kartinka.jpg" className="card-img-top" alt="..." />
        }
      />

      <Card 
        children = {
            <>
              <h5 className="card-title">Special title treament</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </>
        }
      />
    </>
  )
}

export default App
