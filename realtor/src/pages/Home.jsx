import {Link} from "react-router"
export default function Home(){
    return(
        <>
        <h1 className="text-5xl">HIIIII</h1>
        <button><Link to="blog">BLOG</Link></button>
        <button><Link to="map">MAP</Link></button>
        </>
    )
}