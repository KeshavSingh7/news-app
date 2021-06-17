import styles from '../styles/Eotm.module.css';
import { Navigation } from '../components/Navigation';

const Eotm = ({ employeeData }) => {
    return(
        <div className='page-container'>
            <Navigation />
            <div className={ styles.content }>
                <h1>
                    <u> Employee Of The Month </u>
                </h1>
                <h2> { employeeData.name } </h2>
                <h3> { employeeData.post } </h3>
                <img src={ employeeData.img } alt={ employeeData.name } />
                <h4> { employeeData.desc } </h4>
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch('https://my-json-server.typicode.com/KeshavSingh7/news-app/data');
    const data = await res.json();

    return { props: { employeeData: data } };
}

export default Eotm;
