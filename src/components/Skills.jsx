const Skills = () => {
    return (
        <div className="py-16" id="skills">
            <h1 className="flex justify-center text-4xl py-8 text-white">My Skills</h1>
            <div className="flex justify-center mx-24 flex-wrap">
                <div className="my-4 mx-8 flex flex-wrap justify-center">
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-24" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" alt="Git" />
                        <span className="mt-2 text-white">Git</span>
                    </div>
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                        <span className="mt-2 text-white">React</span>
                    </div>
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" />
                        <span className="mt-2 text-white">Vue.js</span>
                    </div>
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
                        <span className="mt-2 text-white">Node.js</span>
                    </div>
                </div>
                <div className="my-4 mx-8 flex flex-wrap justify-center">
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" />
                        <span className="mt-2 text-white">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
                        <span className="mt-2 text-white">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" />
                        <span className="mt-2 text-white">Bootstrap</span>
                    </div>
                    <div className="flex flex-col items-center mx-6">
                        <img className="w-28" src="mysql-official.svg" alt="MySQL" />
                        <span className="mt-2 text-white">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
