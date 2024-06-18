import Comments from "@/app/components/Comments";
import GetAllComments from "@/data/GetAllComments";
import GetAllPosts from "@/data/GetAllPosts";
import GetPost from "@/data/GetPost";
import { Suspense } from "react";

export const generateMetadata =async ({params}) =>{
    const {id} = params;
    const post = await GetPost(id);
    
    return{
       title: post.title,
       description: post.body,
    }
};

const SinglePage = async ({params}) => {
    const {id}=params;
    const postPromise =GetPost(id);
    const commentsPromise =GetAllComments(id);
    // const [post,comments] = await Promise.all([postPromise,commentsPromise]);
    const post = await postPromise;
    return (
        <main>
            <h2>{post.title}</h2>
            <h4 className="mt-4 mb-2">All Comments</h4>
            <Suspense fallback="<h3>Comments are loading...</h3>">
                <Comments promise={commentsPromise}></Comments>
            </Suspense>
            

            
        </main>
    );
};
export const generateStaticParams = async () =>{
    const posts = await GetAllPosts();
    
    return posts.map(post=>(
        {
            id: post.id.toString(),
        }
    ))

}

export default SinglePage;