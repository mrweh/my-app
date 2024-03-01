import {useState, useEffect}  from 'react';
import {getArticlesByTag} from "../api/news";
import {
    Text
} from '@chakra-ui/react';
import NewsInfo from './NewsInfo';
import PaginationButton from './Pagination';

function Media () {

    const [articles, setArticles] = useState([]);
    const [numPage, setNumPage] = useState(2);

    const getData = async () => {
        const data = await getArticlesByTag('media/media', numPage);
        setArticles(data.data.response.results);
    };

    useEffect(()=>{
        getData();
    }, [numPage]);

    const changePageUp = () => {
        setNumPage((prevNumPage)=>{return prevNumPage+1});
    }

    const changePageDown = () => {
        if (numPage>1) setNumPage((prevNumPage)=>{return prevNumPage-1});
    }

    return (
        <>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight='extrabold' align='center'>Media</Text>
            <NewsInfo articles={articles}/>
            <PaginationButton changePageUp={changePageUp} changePageDown={changePageDown}/>
        </>
    );
};

export default Media;