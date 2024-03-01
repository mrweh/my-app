import axios from 'axios';

const apiKey = 'c0487ae9-10a1-4e31-ac51-5423f407c2fe';

export const getArticlesByWord = async (word, page) => {
    const data = await axios.get(
        `https://content.guardianapis.com/search?page=${page}&q=${word}&api-key=${apiKey}`,
        {withCredentials: false});
    return data;
}

export const getArticlesByTag = async (tag, page) => {
    const data = await axios.get(
        `https://content.guardianapis.com/search?page=${page}&tag=${tag}&api-key=${apiKey}`,
        {withCredentials: false});
    return data;
}

