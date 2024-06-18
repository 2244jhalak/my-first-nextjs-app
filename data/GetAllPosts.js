const GetAllPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',
      {
         next:{
            revalidate:10
         }
      }
    );
    
    // Check if the response is not OK
    if (!response.ok) {
       throw new Error('There was an big error')
    }

    return response.json();
    
  };
  
  export default GetAllPosts;