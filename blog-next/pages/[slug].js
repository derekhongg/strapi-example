import Link from "next/link"

export default function Post({ post }) {
    return (
        <div>
            <div>{post.attributes.Title}</div>
        </div>
    )
};

//tell next.js how many pages there are
export async function getStaticPaths() {
    const res = await fetch(`http://localhost:1337/api/posts/`);
    const posts = await res.json();
    console.log(posts);

    const paths = posts.data.map((post) => ({
        params: { slug: post.attributes.Slug },
    }));


    return {
        paths,
        fallback: true,
    };
}



//for reach individual page: get data for that page
export async function getStaticProps({ params }) {
    const { slug } = params;
    const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`);
    const data = await res.json();
    const post = data.data[0];
    
    return {
        props: { post },
    };
}