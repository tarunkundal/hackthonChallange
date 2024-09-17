import { useAppDispatch, useAppSelector } from "@/store/hook"
import { COLORS } from "@/styles/tokens/colors/constant";
import { FONT_SIZE } from "@/styles/tokens/typography";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { useNavigate, useSearchParams } from "react-router-dom";
import CountdownTimer from "./CountDownTimer";
import { TextVariant } from "@/styles/components/Text";
import { hackthonActions } from "@/store/slices/hacktonSlice";
import useCustomToast from "@/common/hooks/useCustomHook";

const ViewHackthon = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const hackthonId = searchParams.get('id');
    const toast = useCustomToast()

    const dispatch = useAppDispatch()
    const hackthons = useAppSelector((state) => state.hackthon)

    const hackthon = hackthons.find((hack) => hack.id === hackthonId)

    const handleDeleteHackthon = (id: string | number) => {
        dispatch(hackthonActions.removeHackthon(id))
        navigate('/')
        toast({ title: 'Challange deleted sucessfully!', status: 'success' })
    }

    const handleUpdateHackthon = (id: string | number) => {
        navigate(`/create-edit?id=${id}`);
    }

    return (
        <Stack>
            <Stack bg={COLORS.Brand[700]} h={'420px'} pl={'126px'} gap={6} justifyContent={'center'}>
                <CountdownTimer startDate={hackthon?.startDate ?? ''} donotShowDetails endDate={hackthon?.endDate ?? ''} />
                <Heading fontSize={FONT_SIZE["5xl"]} color={COLORS.BrandGrey[100]}>{hackthon?.challengeName}</Heading>
                <Text borderRadius={'md'} width={'fit-content'} px={4} py={2} bg={COLORS.Yellow[400]} >{hackthon?.level}</Text>
            </Stack>
            <Stack>
                <Flex boxShadow={'1px .7px 2px darkGreen'} justifyContent={'space-between'} alignItems={'center'} px={14} py={4}>
                    <Heading color={COLORS.BrandGrey[700]}>Overview</Heading>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Button mr={4} onClick={() => handleUpdateHackthon(hackthon?.id ?? '')}>Edit</Button>
                        <Button variant={'outline'} onClick={() => handleDeleteHackthon(hackthon?.id ?? '')} >Delete</Button>
                    </Flex>
                </Flex>
                <Text px={14} py={4} variant={TextVariant.regular16} color={COLORS.BrandGrey[700]}>
                    {hackthon?.description}
                </Text>
            </Stack>
        </Stack>)
}

export default ViewHackthon