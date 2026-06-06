import { Route, Switch } from 'wouter'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductsIndex from './pages/ProductsIndex'
import ProductProfiles from './pages/products/Profiles'
import ProductApp from './pages/products/App'
import ProductLoop from './pages/products/Loop'
import ProductMessenger from './pages/products/Messenger'
import ProductManilla from './pages/products/Manilla'
import ProductVoice from './pages/products/Voice'
import ProductMail from './pages/products/Mail'
import ProductDunaRald from './pages/products/DunaRald'
import Security from './pages/Security'
import Privacy from './pages/Privacy'
import Verification from './pages/Verification'
import AI from './pages/AI'
import Business from './pages/Business'
import Developers from './pages/Developers'
import Ecosystem from './pages/Ecosystem'
import Wizmac from './pages/Wizmac'
import Sekani from './pages/Sekani'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <main style={{ flex: 1 }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={ProductsIndex} />
          <Route path="/products/profiles" component={ProductProfiles} />
          <Route path="/products/app" component={ProductApp} />
          <Route path="/products/loop" component={ProductLoop} />
          <Route path="/products/messenger" component={ProductMessenger} />
          <Route path="/products/manilla" component={ProductManilla} />
          <Route path="/products/voice" component={ProductVoice} />
          <Route path="/products/mail" component={ProductMail} />
          <Route path="/products/dunarald" component={ProductDunaRald} />
          <Route path="/security" component={Security} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/verification" component={Verification} />
          <Route path="/ai" component={AI} />
          <Route path="/business" component={Business} />
          <Route path="/developers" component={Developers} />
          <Route path="/ecosystem" component={Ecosystem} />
          <Route path="/wizmac" component={Wizmac} />
          <Route path="/sekani" component={Sekani} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
