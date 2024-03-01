import {
    Text,
    Link,
    VStack
} from '@chakra-ui/react';

export default function NewsInfoMain ({articles, searchWord}) {

    return (
        <>
        {articles.map(article => {
            return (
            <VStack key={article.id} spacing='2px' align={'left'}>
                <Text textAlign={'left'}>
                <Link href={article.webUrl} color='teal.300' isExternal> {article.webTitle.split((searchWord)[0])} <Link bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight='extrabold'>{searchWord} </Link></Link>
                    {article.webTitle.split((searchWord)[1])}
                </Text>
            </VStack>
            );
        })}
        </>
    );

}