const MyWork = () => {
    return (
        <ul>
            <h1 className="flex justify-center text-3xl text-white">My Work</h1>
            <li className="flex justify-start animate-fade-left animate-duration-[2000ms] border border-red-600 mx-24">
                <div className="my-4 mx-8">
                    <img className="rounded-3xl" src="https://via.placeholder.com/300" alt="placeholder" />
                    <p></p>
                </div>
            </li>
        </ul>
    );
}

export default MyWork;
