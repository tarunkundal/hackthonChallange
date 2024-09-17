import Icons from '@/assets/icons'
import { Flex } from '@chakra-ui/react'

const MainHeader = () => {
    return (
        <Flex justifyContent={'space-between'} px={'89px'} h={'64px'} alignItems={'center'}>
            <Icons.HeaderLogo width={'87px'} height={'38px'} />
        </Flex>
    )
}

export default MainHeader