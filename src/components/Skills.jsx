const Skills = () => {
    return (
        <div className="py-16">
            <h1 className="flex justify-center text-3xl pb-4 text-white">My Skills</h1>
            <div className="flex justify-center border border-red-600 mx-24 flex-wrap">
                <div className="my-4 mx-8 flex flex-wrap justify-center">
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
                        <span className="mx-2 text-white">GitHub</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                        <span className="mx-2 text-white">React</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
                        <span className="mx-2 text-white">Node.js</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" />
                        <span className="mx-2 text-white">Vue.js</span>
                    </div>
                </div>
                <div className="my-4 mx-8 flex flex-wrap justify-center">
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" />
                        <span className="mx-2 text-white">JavaScript</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
                        <span className="mx-2 text-white">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" />
                        <span className="mx-2 text-white">Bootstrap</span>
                    </div>
                    <div className="flex items-center mx-4">
                        <img className="w-28" src="mysql-official.svg" alt="MySQL" />
                        <span className="mx-2 text-white">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
