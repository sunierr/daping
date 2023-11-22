import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

export default function MyCard(props) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            boxShadow={props.isFocused ? '0 0px 55px 15px rgba(0, 0, 0, 0.2)' : 'none'}
            transform={props.isFocused ? 'scale(1.1)' : 'none'}
            transition="box-shadow 0.3s ease, transform 0.3s ease"
        >
            <Image
                objectFit='fill'
                //maxW={{ base: '100%', sm: '200px' }}
                src={props.mySrc}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='sm'>{props.myHeading}</Heading>

                    <Text py='2'>
                        {props.myText}
                    </Text>
                    <Text py='2'>
                        暖新闻
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    )
}
