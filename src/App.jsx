import Banner from './components/Banner'
import Navbar from './components/Navbar'
import MyWork from './components/MyWork'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'

const App = () => {
    return (
        <div className="App" id="light-effect">
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills />
        <MyWork />
        </div>
    )
}

export default App
