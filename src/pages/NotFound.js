import { Link } from "react-router-dom"
function NotFound() {
    return (
        <div className="container">
            <h1>Error 404.Page not Found</h1>
            <p>
                <Link to={'/'}>Go to main page </Link>

            </p>
        </div>
    )
}

export default NotFound