import Loader from "@/components/shared/Loader";
import PostCards from "@/components/shared/PostCards";
import { useGetRecentPosts } from "@/lib/react-query/quiersAndMutaions";
import { Models } from "appwrite";

const Home = () => {
  const {data : posts  , isPending:isPostLoading } = useGetRecentPosts();
  const postsData: Models.DocumentList<Models.Document> | undefined = posts as Models.DocumentList<Models.Document>;



  return (
    <div className="flex flex-1 ">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader/>
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {postsData?.documents ? (
                postsData.documents.map((post) => (
                  <PostCards post={post} key={post.caption} />
                ))
              ) : (
                <p>No posts available</p>
              )}

            </ul>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Home