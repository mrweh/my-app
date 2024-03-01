import {
    Text,
    Link,
    VStack
} from '@chakra-ui/react';

export default function NewsInfo ({articles}) {

    return (
        <>
        {articles.map(article => {
            return (
                <VStack key={article.id} spacing='1px' align={'left'}>
                    <Text textAlign={'left'}>
                    <Link href={article.webUrl} color='teal.300' isExternal>{article.webTitle}</Link>
                    </Text>
                </VStack>
                    );
        })}
        </>
    );

}