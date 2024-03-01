import {useState, useEffect} from 'react';
import {getArticlesByWord} from "../api/news";
import {
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react';
import NewsInfoMain from './NewsInfoMain';
import PaginationButton from './Pagination';

export default function MainPage () {

    const [articles, setArticles] = useState([]);
    const [numPage, setNumPage] = useState(2);
    const [searchWord, setSearchWord] = useState('debates');
  
  
  
    const getData = async (word, page) => {
      const data = await getArticlesByWord(word, page);
      const status = data.status;
      if (status === 200) {
        console.log('Hi', data.data.response.results);
        setArticles(data.data.response.results);
      }
    };
  
    //const getDataCall = (word, page) => {
      //getData(word, page);
    //};
  
    useEffect(()=> {
      getData(searchWord, numPage);
    }, [numPage, searchWord]);
  
    const inputHandler = (e) => {
      console.log('aaaa', e);
      setSearchWord(e.target.value);
    };

    const changePageUp = () => {
      setNumPage((prevNumPage)=>{return prevNumPage+1});
    }

    const changePageDown = () => {
        setNumPage((prevNumPage)=>{return prevNumPage-1});
    }

    return(
    <>
      <VStack spacing='2px' align={'center'}>
          <InputGroup size='md'>
            <Input value={searchWord} onChange={inputHandler} variant='filled' placeholder='google something...' size='md'></Input>
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' /*onClick={getDataCall('police', 3)}*/>
                Find
              </Button>
            </InputRightElement>
        </InputGroup>
      </VStack>
      <NewsInfoMain articles={articles} searchWord={searchWord}/>
      <PaginationButton numPage={numPage} changePageUp={changePageUp} changePageDown={changePageDown}/>
    </>);
}