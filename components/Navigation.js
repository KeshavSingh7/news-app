import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export const Navigation = () => {
    const router = useRouter();

    return (
        <div className={ styles.container }>
            <div onClick={ () => { router.push('/') } } className={ styles.link }>HOME</div>
            <div onClick={ () => { router.push('/NewsFeed') } } className={ styles.link }>FEED</div>
            <div onClick={ () => { router.push('/Eotm') } } className={ styles.link }>EOTM</div>
        </div>
    );
};