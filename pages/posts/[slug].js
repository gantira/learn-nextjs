import Layout from "../../components/Layout";

export default function Show({ post }) {
    return (
        <Layout title={post.title}>
            <div className="container">
                <h1 className="font-bold text-4xl mb-5 border-b pb-2">
                    {post.title}
                </h1>
                <div className="mb-5">
                    {post.body}
                </div>
                <strong>{post.user.name}</strong> published on <strong>{post.created_at}</strong>

            </div>
        </Layout >
    )
}

export const getServerSideProps = async ({ params }) => {
    const response = await fetch(`http://localhost:8000/api/posts/${params.slug}`)
    const post = await response.json()


    return {
        props: {
            post: post.data
        }
    }
}