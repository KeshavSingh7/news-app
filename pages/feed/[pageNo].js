import { Navigation } from "../../components/Navigation";
import styles from '../../styles/Feed.module.css';
import { useRouter } from "next/router";

const Feed = ({ pageNum, articles }) => {
    const router = useRouter();

    const managePrevClass = () => {
        if(pageNum === 1)
            return 'styles.inactive';
        else
            return 'styles.active';
    }

    const managePrevClick = () => {
        router.push({
            pathname: '/feed/[pageNo]',
            query: { pageNo: +pageNum - 1 }
        });
    }

    const manageNextClass = () => {
        if(pageNum === 5)
            return 'styles.inactive';
        else
            return 'styles.active';
    }

    const manageNextClick = () => {
        router.push({
            pathname: '/feed/[pageNo]',
            query: { pageNo: +pageNum + 1 }
        });
    }

    return(
        <div>
            <Navigation />
            <div className= {styles.content}>
                {
                    articles.map((item, index) => {
                        return(<div key={index} className={ styles.articleContainer }>
                            <h3> { item.title } </h3>
                            <img src={ item.urlToImage } alt='article image' />
                            <p> { item.content } </p>
                            <br />
                        </div>) 
                    })   
                }
                <div className={ styles.pageNavigation }>
                    <p className={`${managePrevClass()} + ' '  + ${styles.link}`} onClick={managePrevClick}> <span>&laquo;</span> Previous Page </p>
                    <p> #{pageNum} </p>
                    <p className={`${manageNextClass()} + ' '  + ${styles.link}`} onClick={manageNextClick}> Next Page <span>&raquo;</span> </p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNum = pageContext.query.pageNo;

    if(!pageNum || pageNum < 1 || pageNum > 5) {
        return  { props: { pageNum: 1, articles : [] } }
    }
        
    const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNum}`;
    const res = await fetch(url, {
        mode: 'no-cors',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        }
    });

    const data = await res.json();

    return  { props: { pageNum: pageNum, articles: data.articles } }
}

export default Feed;