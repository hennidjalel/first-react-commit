import { useState } from "react";
import uniqid from "uniqid";
import BlogList from "./BlogList";
const Home = () => {
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handClick = () => {
    //     setName('Luigi');
    //     setAge(30);
    // }
    // const handClickAgain = () => {
    //     setAge(30)
    // }


    const [blogs, setBlogs] = useState([
        { title: 'My new websit', body: 'lorem ipsi=um...', author: 'mario', id: 1 },
        { title: 'Welcom party!', body: 'lorem ipsi=um...', author: 'yoshi', id: 2 },
        { title: 'Web dev top ninja', body: 'lorem ipsi=um...', author: 'mario', id: 3 }
    ])

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />
        </div>
    );
}

export default Home;