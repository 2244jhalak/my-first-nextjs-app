

const Comments = async ({promise}) => {
    const comments = await promise;
    return (
        <div>
            {
                comments.map(comment=><p className="mb-1" key={comment.id}>{comment.body}</p>)
            }
        </div>
    );
};

export default Comments;