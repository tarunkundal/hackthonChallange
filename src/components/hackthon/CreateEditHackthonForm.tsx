import Icons from '@/assets/icons'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { hackthonActions } from '@/store/slices/hacktonSlice'
import { COLORS } from '@/styles/tokens/colors/constant'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useSearchParams } from 'react-router-dom'
import useCustomToast from '@/common/hooks/useCustomHook'

interface Hackthon {
    id?: string;
    challengeName: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
    level: string
}


const CreateEditHackthonForm = () => {
    const [searchParams] = useSearchParams();
    const hackthonIdToUpdated = searchParams.get('id');
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const toast = useCustomToast()

    const hackthons = useAppSelector((state) => state.hackthon)

    const hackthonToUpdated = hackthons.find((hack) => hack.id === hackthonIdToUpdated)

    const [challengeData, setChallangeData] = useState<Hackthon>({
        challengeName: hackthonToUpdated ? hackthonToUpdated.challengeName : '',
        startDate: hackthonToUpdated ? hackthonToUpdated?.startDate : '',
        endDate: hackthonToUpdated ? hackthonToUpdated.endDate : '',
        description: hackthonToUpdated ? hackthonToUpdated.description : '',
        image: hackthonToUpdated ? hackthonToUpdated.image : '',
        level: hackthonToUpdated ? hackthonToUpdated.level : 'Easy'
    })

    const [dateError, setDateError] = useState<string | null>(null); // State to manage date errors

    const handleChange = (data: ChangeEvent<HTMLInputElement>) => {
        setChallangeData((prev) => ({
            ...prev,
            [data.target.name]: data.target.value
        }))
    }

    // Handle image upload
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setChallangeData((prev) => ({
                    ...prev,
                    image: reader.result as string
                }))
            };
            reader.readAsDataURL(file);
            toast({ title: 'Image uploaded sucessfully!', status: 'success' })
        }
    };

    // Handle endDate validation
    const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const endDateValue = e.target.value;
        const startDateValue = challengeData.startDate;

        if (startDateValue && new Date(endDateValue) <= new Date(startDateValue)) {
            setDateError('End date must be greater than start date.');
        } else {
            setDateError(null); // Reset error if valid
            setChallangeData((prev) => ({
                ...prev,
                endDate: endDateValue
            }));
        }
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (!challengeData.startDate || !challengeData.endDate || dateError) {
            return; // Prevent submission if date error exists
        }

        if (hackthonToUpdated) {
            // If ID exists, update the existing hackathon
            const updatedChallange = {
                id: hackthonToUpdated.id, // Use the existing ID
                ...challengeData
            }

            dispatch(hackthonActions.updateHackthon(updatedChallange)); // Update hackathon action
            toast({ title: 'Challange updated sucessfully!', status: 'success' })
        } else {
            // Create a new hackathon
            const newChallange = {
                id: uuidv4(), // Generate a new ID
                ...challengeData
            }

            dispatch(hackthonActions.addHackthon(newChallange)); // Add new hackathon action
            toast({ title: 'Challange created sucessfully!', status: 'success' })

        }

        setChallangeData({
            challengeName: '',
            image: '',
            startDate: '',
            endDate: '',
            description: '',
            level: 'Easy'
        })

        if (hackthonToUpdated) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return (
        <>
            <Stack>
                <Flex justifyContent={'space-between'} alignItems={'center'} bg={COLORS.BrandGrey[100]} px={'89px'} h={'107px'}>
                    <Heading>
                        {hackthonToUpdated ? 'Update Challenge Details' : 'Challenge Details'}
                    </Heading>
                    <Box />
                </Flex>

                <form>
                    <Stack spacing={'20px'} w={'50%'} p={12} gap={6} >
                        <FormControl>
                            <FormLabel>Challenge Name</FormLabel>
                            <Input
                                name={'challengeName'}
                                type={'text'}
                                value={challengeData.challengeName}
                                onChange={(e) => handleChange(e)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Start Date</FormLabel>
                            <Input
                                name={'startDate'}
                                type={'datetime-local'}
                                value={challengeData.startDate}
                                onChange={(e) => handleChange(e)}
                                cursor='pointer'
                            />
                        </FormControl>
                        <FormControl isInvalid={!!dateError}>
                            <FormLabel>End Date</FormLabel>
                            <Input
                                name={'endDate'}
                                type={'datetime-local'}
                                value={challengeData.endDate}
                                onChange={(e) => handleEndDateChange(e)}
                                cursor='pointer'
                            />
                            {dateError && <FormErrorMessage>{dateError}</FormErrorMessage>}
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input
                                name={'description'}
                                type={'text'}
                                onChange={(e) => handleChange(e)}
                                value={challengeData.description}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Image src={challengeData.image} alt='Image' w={'150px'} h={'150px'} />
                            <Input
                                name={'image'}
                                type={'file'}
                                onChange={(e) => handleImageUpload(e)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Level Type</FormLabel>
                            <Menu>
                                {({ isOpen }) => (<>
                                    <MenuButton as={Button} w={'25%'} rightIcon={isOpen ? <Icons.UpArrow /> : <Icons.DownArrow />}>
                                        {challengeData.level}
                                    </MenuButton>
                                    <MenuList minWidth="240px">
                                        <Box p={2} borderBottom="1px solid" borderColor="gray.200">
                                            <Text fontWeight="bold" mb={2}>
                                                Please Select Level
                                            </Text>
                                            {['Easy', 'Medium', 'Hard'].map((level) => (
                                                <MenuItem key={level} onClick={() => { setChallangeData((prev) => ({ ...prev, level })) }} >
                                                    {level}
                                                </MenuItem>
                                            ))}
                                        </Box>
                                    </MenuList>
                                </>)}
                            </Menu>
                        </FormControl>
                        <Button type='submit' mt={4} onClick={handleSubmit}>
                            {hackthonToUpdated ? 'Update Changes' : 'Save Changes'}
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </>
    )
}

export default CreateEditHackthonForm
