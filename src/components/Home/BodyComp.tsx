import Icons from '@/assets/icons'
import { TextVariant } from '@/styles/components/Text'
import { COLORS } from '@/styles/tokens/colors/constant'
import { FONT_SIZE, FONT_WEIGHT } from '@/styles/tokens/typography'
import { Box, Button, Center, Flex, Grid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const BodyComp = () => {
    const navigate = useNavigate()
    return (
        <Box>
            <Flex height={'535px'} bg={COLORS.Brand[700]} alignItems={'center'} justifyContent={'space-between'} paddingX={{ base: '5px', md: '90px' }}  >
                <Box w={{ base: 'full', md: '65%' }}>
                    <Flex justifyContent={'space-around'} >
                        <Box
                            w={'9.71px'}
                            h={'115.91px'}
                            bg={'#FFCE5C'}

                        />
                        <Flex flexDirection={'column'} w={'70%'} gap={5}>
                            <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['5xl']} color={COLORS.BrandGrey[10]}>
                                Accelerate Innovation with Global AI Challenges
                            </Text>
                            <Text variant={TextVariant.medium14} color={COLORS.BrandGrey[100]}>
                                AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                            </Text>
                            <Button onClick={() => navigate('/create-edit')}>Create Challange</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Box w={'30%'}>
                    <Icons.PicArt width={'242px'} height={'294px'} />
                </Box>
            </Flex>
            <Flex h={'200px'} bg={COLORS.Brand[900]} px={'183px'} justifyContent={'space-between'} alignItems={'center'}>
                <Flex alignItems={'center'} color={COLORS.Brand[50]}>
                    <Icons.AiChip height={'55px'} width={'55px'} />
                    <Box px={4}>
                        <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['2xl']} >100K +</Text>
                        <Text variant={TextVariant.bold24} fontSize={FONT_SIZE.lg} >AI model submissions</Text>
                    </Box>
                </Flex>
                <Flex alignItems={'center'} color={COLORS.Brand[50]}>
                    <Icons.ContactPic height={'55px'} width={'55px'} />
                    <Box px={4}>
                        <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['2xl']} >50K +</Text>
                        <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['lg']} >Data Scientist</Text>
                    </Box>
                </Flex>
                <Flex alignItems={'center'} color={COLORS.Brand[50]}>
                    <Icons.AiHosted height={'55px'} width={'55px'} />
                    <Box px={4}>
                        <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['2xl']} >100 +</Text>
                        <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['lg']} >AI Challenges hosted</Text>
                    </Box>
                </Flex>

            </Flex>

            <Box h={'800px'}>
                <Center my={12}>
                    <Text variant={TextVariant.bold24} fontSize={FONT_SIZE['5xl']}>
                        Why Participate in{' '}
                        <Text as="span" color={COLORS.Brand[500]} fontSize={FONT_SIZE['5xl']}>
                            AI Challenges?
                        </Text>
                    </Text>
                </Center>
                <Center>
                    <Grid my={8} templateColumns="repeat(2, 1fr)" gap={6}>
                        <Flex flexDirection={'column'} justifyContent={'space-around'} alignItems={'flex-start'} w={'542px'} h={'276px'} borderRadius={'lg'} px={'35px'} py={'55px'} bg={COLORS.BlackGrey[500]}>
                            <Icons.CarbonNotebook width={'38px'} height={'30px'} />
                            <Text fontWeight={FONT_WEIGHT.bold} fontSize={FONT_SIZE['3xl']}>Prove Your Skills</Text>
                            <Text>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</Text>
                        </Flex>
                        <Flex flexDirection={'column'} justifyContent={'space-around'} alignItems={'flex-start'} w={'542px'} h={'276px'} borderRadius={'lg'} px={'35px'} py={'55px'} bg={COLORS.BlackGrey[500]}>
                            <Icons.UserCarbon width={'38px'} height={'30px'} />
                            <Text fontWeight={FONT_WEIGHT.bold} fontSize={FONT_SIZE['3xl']}>Learn from community</Text>
                            <Text>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</Text>
                        </Flex>
                        <Flex flexDirection={'column'} justifyContent={'space-around'} alignItems={'flex-start'} w={'542px'} h={'276px'} borderRadius={'lg'} px={'35px'} py={'55px'} bg={COLORS.BlackGrey[500]}>
                            <Icons.Robot width={'38px'} height={'30px'} />
                            <Text fontWeight={FONT_WEIGHT.bold} fontSize={FONT_SIZE['3xl']}>Challenge yourself</Text>
                            <Text>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</Text>
                        </Flex>
                        <Flex flexDirection={'column'} justifyContent={'space-around'} alignItems={'flex-start'} w={'542px'} h={'276px'} borderRadius={'lg'} px={'35px'} py={'55px'} bg={COLORS.BlackGrey[500]}>
                            <Icons.UserCarbon width={'38px'} height={'30px'} />
                            <Text fontWeight={FONT_WEIGHT.bold} fontSize={FONT_SIZE['3xl']}>Earn recognition</Text>
                            <Text>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</Text>
                        </Flex>
                    </Grid>
                </Center>
            </Box>
        </Box>)
}

export default BodyComp