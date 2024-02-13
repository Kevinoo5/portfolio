import Banner from './components/Banner'
import Navbar from './components/Navbar'
import MyProjects from './components/myProjects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'

const App = () => {
    return (
        <div className="App" id="light-effect">
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills />
        <MyProjects />
        <Experience />
    </div>
    )
}

export default App
