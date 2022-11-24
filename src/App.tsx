import './App.css'
import Layout from "./components/Layout";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="App">
      <Layout>
          <CartList/>
      </Layout>
    </div>
  )
}

export default App
