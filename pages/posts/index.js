import Link from "next/link";
import Layout from "../../components/Layout";

export default function Index({ posts }) {
    return (
        <Layout title="Index">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        {posts.map((post) => {
                            return (
                                <Link href={`/posts/${post.slug}`} key={post.id}>
                                    <a className="block hover:bg-blue-500 hover:text-white border p-4 rounded-lg mb-5" >
                                        {post.title}
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:8000/api/posts')
    const posts = await response.json()

    return {
        props: {
            posts: posts.data
        }
    }
}