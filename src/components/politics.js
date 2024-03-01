import {useState, useEffect} from 'react';
import {getArticlesByTag} from "../api/news";
import {
    Text
} from '@chakra-ui/react';
import NewsInfo from './NewsInfo';
import PaginationButton from './Pagination';



export default function Politics () {

    const [articles, setArticles] = useState([]);
    const [numPage, setNumPage] = useState(2);

    useEffect(()=>{
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag('politics/politics', 2);
        setArticles(data.data.response.results);
    };

    const changePageUp = () => {
        setNumPage((prevNumPage)=>{return prevNumPage+1});
    }
  
    const changePageDown = () => {
        if (numPage>1) setNumPage((prevNumPage)=>{return prevNumPage-1});
    }

    return (
        <>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight='extrabold' align='center'>Politics</Text>
            <NewsInfo articles={articles}/>
            <PaginationButton numPage={numPage} changePageUp={changePageUp} changePageDown={changePageDown}/>
        </>
    );
};