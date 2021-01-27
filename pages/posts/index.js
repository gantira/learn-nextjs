import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import { sliceUrl } from "../api/sliceUrl";

export default function Index({ posts }) {
    const router = useRouter()

    return (
        <Layout title="Index">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2">
                        {posts.data.map((post) => {
                            return (
                                <Link href={`/posts/${post.slug}`} key={post.id}>
                                    <a className="block hover:bg-blue-500 hover:text-white border p-4 rounded-lg mb-5">
                                        {post.title}
                                    </a>
                                </Link>
                            )
                        })}

                        {posts.meta.links.map((link, index) => {
                            return (
                                <button disabled={link.url == null && 'disabled'} key={index} onClick={() => router.push(`/posts/pages/${sliceUrl(link.url)}`)} className="h-10 px-4 rounded mx-1 border" dangerouslySetInnerHTML={{ __html: link.label }} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
    const response = await fetch(`http://localhost:8000/api/posts?page=${page}`)
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}