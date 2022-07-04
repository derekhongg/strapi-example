export default function Post({ post }) {
    return(
        <div>{post.Title}</div>
    )
};

//tell next.js how many pages there are
export async function getStaticPaths({ posts }) {
    const res = await fetch('http://localhost:1337/api/posts')
    const data = await res.json();

    const paths = posts.map((post) => ({
        params: { slug: post.Slug },
    }))

    return {
        paths,
        fallback: false
    }
}



//for reach individual page: get data for that page
export async function getStaticProps({ params }) {
    const { slug } = params;

    const res = await fetch(`http://localhost:1337/posts/?Slug=${slug}`);
    const data = await res.json();
    const post = data[0];

    return {
        props: { post },
    };
}