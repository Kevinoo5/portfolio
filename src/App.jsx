import Banner from './components/Banner'
import Navbar from './components/Navbar'
import MyProjects from './components/myProjects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'

const App = () => {
    return (
        <div className="App" id="light-effect">
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills />
        <MyProjects />
    </div>
    )
}

export default App
