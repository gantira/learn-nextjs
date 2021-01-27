import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Layout from "../../components/Layout";

export default function Index({ posts }) {
    return (
        <Layout title="Index">
            <div className="container">
                {posts.map((post) => {
                    return (
                        <div key={post.id} >
                            {post.title}
                        </div>
                    )
                })}
            </div>
        </Layout>
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