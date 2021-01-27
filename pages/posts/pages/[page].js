import Layout from "../../../components/Layout";
import BlogPost from "../../../components/BlogPost";

export default function Index({ posts }) {
    return (
        <Layout title="Index">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        <BlogPost pagination={posts.meta.links} data={posts.data} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({ params }) => {
    const response = await fetch(`http://localhost:8000/api/posts?page=${params.page}`)
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}