import { Hackthon } from '@/store/slices/hacktonSlice'
import { Button, Card, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
import CountdownTimer from './CountDownTimer';
import { useNavigate } from 'react-router-dom';

interface HackthonCardProps {
  data: Hackthon;
}

const HackthonCard = ({ data }: HackthonCardProps) => {
  const navigate = useNavigate()

  const handleViewHackthon = (data: Hackthon) => {
    console.log(data);
    navigate(`/view-hackthon?id=${data.id}`);
  }

  return (
    <Card maxW='sm' w={'354px'} m={4} >
      <CardBody>
        <Image
          src={data.image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          height={200}
          fit={'contain'}
          mx={'auto'}
        />
        <Stack mt='6' spacing='3' textAlign={'center'}>
          <CountdownTimer startDate={data.startDate} endDate={data.endDate} challengeName={data.challengeName} />
        </Stack>
      </CardBody>
      <CardFooter justifyContent={'center'} mt={-4}>
        <Button w={'80%'} onClick={() => handleViewHackthon(data)}>
          Participate Now
        </Button>
      </CardFooter>
    </Card>
  )
}

export default HackthonCard

