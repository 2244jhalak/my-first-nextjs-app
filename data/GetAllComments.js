const GetAllComments = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  
    return response.json();
  };
  
  export default GetAllComments;