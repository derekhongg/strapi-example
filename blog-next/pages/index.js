export default function Home({ posts }) {
  console.log("I am on the frontend")
  return (
    <div>
      <h1>Hello</h1>
      {posts && posts.map((post) => (
        <div key={post.id}>
          <h2>{post.Title}</h2>
        </div>
      ))}
    </div>
  )
}

export async function geStaticProps() {
  //Get Posts from API
  const res = await fetch('http://localhost:1337/api/posts');
  const posts = await res.json();
  return {
    props: { posts },
  }
}
