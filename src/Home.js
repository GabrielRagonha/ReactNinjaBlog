import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Gabriel', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Felipe', id: 2 },
    { title: 'Web Dev top tips', body: 'lorem ipsum...', author: 'Jorge', id: 3 }
  ]);

  const [name, setName] = useState('Gabriel');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran', name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName('Jorge')}>Change name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;