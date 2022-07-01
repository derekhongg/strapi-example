import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      {posts &&
        posts.data.map((post) => (
          <Link href={`/${post.attributes.Slug}`} key={post.id}>
            <a>
              <h2>{post.attributes.Title}</h2>
              <h2>{post.attributes.Slug}</h2>
              <p>{post.attributes.Content}</p>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/api/posts");
  
  const posts = await res.json();
  console.log(posts);
  return {
    props: { posts },
  };
}
