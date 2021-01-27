import { useRouter } from 'next/router'

const Show = () => {
    const router = useRouter()
    const { slug } = router.query
    console.log(slug);
    return (
        <div>
            The wildcard is: {slug}
        </div>
    );
};

export default Show;