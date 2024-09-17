import Icons from '@/assets/icons'
import { COLORS } from '@/styles/tokens/colors/constant'
import { FONT_WEIGHT } from '@/styles/tokens/typography'
import { Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import FilterComp from './FilterComp'
import { useState } from 'react'
import HackthonListComp from './HackthonListComp'

const HackthonHeader = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [filterToRemove, setFilterToRemove] = useState<string>('')
    const [search, setSearch] = useState<string>('')

    const getSelectedItems = (selectedItems: string[]) => {
        setSelectedItems(selectedItems)
    }

    const removeSelectedItem = (selectedItem: string) => {
        // setSelectedItems(selectedItems.filter(item => item !== selectedItem))
        setFilterToRemove(selectedItem)
    }
    console.log(selectedItems);


    return (<>
        <Stack h={'324px'} bg={COLORS.Brand[900]} p={4} py={14} justifyContent={'space-around'}>
            <Heading textAlign={'center'} fontWeight={FONT_WEIGHT.bold} color={COLORS.BrandGrey[10]}>Explore Challanges</Heading>
            <Flex w={'70%'} m={'auto'} alignItems={'center'}>
                <InputGroup>
                    <InputLeftElement>
                        <Icons.SearchIcon />
                    </InputLeftElement>
                    <Input w={'90%'} placeholder={'Search'} type='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                </InputGroup>
                <FilterComp getSelectedItems={getSelectedItems} filterToRemove={filterToRemove} />
            </Flex>

            <Flex gap={2} width={'70%'} m={'auto'}>
                {selectedItems.map((item, i) => {
                    return <Text key={i} bg={COLORS.Green[100]} w={'fit-content'} borderRadius={'xl'} p={2} px={4} >{item}<Text
                        as='button'
                        fontWeight={FONT_WEIGHT.extrabold}
                        onClick={() => removeSelectedItem(item)}
                        ml={2}>x</Text>  </Text>
                })}
            </Flex>
        </Stack>
        <HackthonListComp filterData={selectedItems} searchQuery={search} />
    </>
    )
}

export default HackthonHeader