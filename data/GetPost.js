const GetPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
    return response.json();
  };
  
  export default GetPost;