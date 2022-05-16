import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handlClick = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };



    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(response => response.json())
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false)
                })
        }, 4000);
    }, []);
    return (
        <div className="Home">
            {isLoading && <div class="spinner">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>}
            {/* first blogs is the props name, {blogs} is the data we pass in  */}
            {blogs && < BlogList blogs={blogs} title="All blogs!" handlClick={handlClick} />}


        </div>
    );
};

export default Home;

// const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     constandCli hck = () => {
//         setName('Luigi');
//         setAge(30);
//     }
//     const handClickAgain = () => {
//         setAge(30)
//     }
