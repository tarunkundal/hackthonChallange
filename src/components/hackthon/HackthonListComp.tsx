import HackthonCard from './HackthonCard'
import { Grid, Stack } from '@chakra-ui/react'
import { COLORS } from '@/styles/tokens/colors/constant'
import { useAppSelector } from '@/store/hook'
import useDebounce from '@/common/hooks/useDebounce'

interface PropsType {
    filterData: string[],
    searchQuery?: string
}

const HackthonListComp = ({ filterData, searchQuery = '' }: PropsType) => {
    const debouncedSearchTerm = useDebounce(searchQuery, 500);
    console.log(filterData, debouncedSearchTerm);

    const hackthons = useAppSelector((state) => state.hackthon)

    // Apply both filters (level + search query) at once
    const filteredHacktons = hackthons.filter(item => {
        // Check for filterData (level) and searchQuery (debouncedSearchTerm)
        const levelMatch = filterData.length > 0 ? filterData.includes(item.level) : true;
        const searchMatch = item.challengeName.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

        return levelMatch && searchMatch;
    });
    return (
        <>
            <Stack bg={COLORS.Brand[700]}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6} w={'80%'} mx={'auto'} my={14}>
                    {
                        filteredHacktons.map((hackthon) => {
                            return <HackthonCard data={hackthon} key={hackthon.id} />
                        })
                    }
                </Grid>
            </Stack>
        </>)
}

export default HackthonListComp