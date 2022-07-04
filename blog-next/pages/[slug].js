export default function Post({ post }) {
    return (
        <div>{post.Title}</div>
    )
};

//tell next.js how many pages there are
export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/api/posts");
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { slug: post.Slug },
    }));

    return {
        paths,
        fallback: true,
    };
}



//for reach individual page: get data for that page
export async function getStaticProps({ params }) {
    const { id } = params;

    const res = await fetch(`http://localhost:1337/api/posts/${id}`);
    const data = await res.json();
    const post = data[0];

    return {
        props: { post },
    };
}