import GetAllPosts from "@/data/GetAllPosts";
import Link from "next/link";

const Posts = async() => {
    const posts=await GetAllPosts();
    return (
        <main className="mt-10">
              <div className="gap-5 flex-flex-col">
                {
                    posts.map(post=><li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)
                }
              </div>
        </main>
    );
};

export default Posts;