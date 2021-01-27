import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="https://parsinta.com/favicons/favicon-16x16.png?v=vMgGe8RqKr" />
            </Head>
            <Navbar />
            <div className="my-8">
                {props.children}
            </div>
            <footer className="py-5 mt-5 border-t">
                <div className="container">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, exercitationem neque qui error aliquam, voluptatibus cupiditate recusandae inventore pariatur saepe earum quia, nemo ducimus architecto temporibus aliquid quibusdam doloremque beatae?
                </div>
            </footer>
        </div>
    )
}