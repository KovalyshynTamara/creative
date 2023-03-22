import BlockTitle from "../assets/components/common/BlockTitle"
import blockTitle from '../data/blockTitle.json'
import BlogItem from "../assets/components/blog/BlogItem"
import './../assets/scss/blog.scss'
import { useEffect, useState } from "react"
import { API_KEY } from "../config"
import axios from "axios"
import { toast } from "../assets/components/helpers"
import Pagination from "../assets/components/Pagination"
import './../assets/css/common/pagination.scss'

function Blog() {
    const [newsList, setNewsList] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)

    const limit = 12
    
    console.log(total);

    useEffect(() => {
        fetchBlogData()
    }, [page])

    const handlerPrevPage = () => {
        if (page === 1) {
            return false
        }
        setPage(page - 1)
    }
    const handlerNextPage = () => {
        if (page === total) {
            return false
        }
        setPage(page + 1)
    }

    const fetchBlogData = () => {
        const offset = (page - 1) * limit;

        axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=${limit}&offset=${offset}&categories=technology&languages=en`)
            .then((resp) => {
                debugger;
            setNewsList(resp.data.data)
            setTotal(Math.ceil(resp.data.pagination.total/limit))
        })
            .catch((resp) => {
                debugger;
            toast.danger(resp.data.error.message)
        })
    }

    return (
        <div className="blog-page">
            <section>
                <div className="container">
                    <BlockTitle
                        subtitle={blockTitle.blog.subtitle}
                        title={blockTitle.blog.title}
                        center />
                    <div className="items-wrap">
                        {newsList.map((itemNews,index) => <BlogItem key={index} item={itemNews} /> )}       
                    </div>
                    <Pagination total={total} page={page} gotoHandler={ (newPage)=>{setPage(newPage)}} />
                </div>
            </section> 
        </div>
    
    )
}

export default Blog