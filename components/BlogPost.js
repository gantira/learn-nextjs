import Link from 'next/link'
import { sliceUrl } from '../pages/api/sliceUrl'
import { useRouter } from 'next/router'

export default function BlogPost(props) {
    const router = useRouter()

    return (
        <div>
            {props.data.map((post) => {
                return (
                    <Link href={`/posts/${post.slug}`} key={post.id}>
                        <a className="block hover:bg-blue-500 hover:text-white border p-4 rounded-lg mb-5">
                            {post.title}
                        </a>
                    </Link>
                )
            })}

            {props.pagination.map((link, index) => {
                return (
                    <button disabled={link.url == null && 'disabled'} key={index} onClick={() => router.push(`/posts/pages/${sliceUrl(link.url)}`)} className={`${link.active && 'bg-blue-500 border-blue-500 text-white'} h-10 px-4 rounded mx-1 border focus:outline-none focus:ring focus:ring-blue-200 disabled:opacity-50`} dangerouslySetInnerHTML={{ __html: link.label }} />
                )
            })}
        </div>
    )
}