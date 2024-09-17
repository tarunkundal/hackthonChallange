import { TextVariant } from "@/styles/components/Text";
import { COLORS } from "@/styles/tokens/colors/constant";
import { Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
    startDate: string;
    endDate: string;
    challengeName?: string;
    donotShowDetails?: boolean
}

type Status = 'Event Ended' | 'Starts in' | 'Ends in';

const challangeStatus: Record<Status, { text: string; color: string }> = {
    'Event Ended': {
        text: 'Past',
        color: '#C35B56',
    },
    'Starts in': {
        text: 'Upcoming',
        color: '#EDE9D0',
    },
    'Ends in': {
        text: 'Active',
        color: '#33BC9B',
    },
};

const CountdownTimer = ({ startDate, endDate, challengeName, donotShowDetails }: CountdownTimerProps) => {
    const calculateTimeLeft = (targetDate: string | Date) => {
        const now = new Date();
        const difference = new Date(targetDate).getTime() - now.getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }

        return timeLeft;
    };

    const [status, setStatus] = useState<Status>("Starts in");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();

            if (now < new Date(startDate)) {
                setStatus("Starts in");
                setTimeLeft(calculateTimeLeft(startDate));
            } else if (now >= new Date(startDate) && now < new Date(endDate)) {
                setStatus("Ends in");
                setTimeLeft(calculateTimeLeft(endDate));
            } else {
                setStatus("Event Ended");
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [startDate, endDate]);

    return (
        <>
            {!donotShowDetails && <Text
                bg={challangeStatus[status].color}
                borderRadius='lg'
                px={'4'}
                py={2}
                w={'fit-content'}
                mx={'auto'}
            >
                {challangeStatus[status].text}
            </Text>}

            {!donotShowDetails && <Heading size='md'>{challengeName}</Heading>}


            <Text color={donotShowDetails ? COLORS.Brand[50] : 'black'} variant={TextVariant.semibold14} mb={-2}>{status}</Text>
            {status === "Event Ended" ? (
                <Text p={2} w={'fit-content'} bg={donotShowDetails ? challangeStatus[status].color : 'inherit'} borderRadius={'md'} variant={TextVariant.bold20}>
                    {new Date(endDate).toLocaleString()}
                </Text>
            ) : (
                <Text p={2} w={'fit-content'} bg={donotShowDetails ? challangeStatus[status].color : 'inherit'} borderRadius={'md'} variant={TextVariant.bold20}>
                    {timeLeft.days} days : {timeLeft.hours} hours : {timeLeft.minutes} minutes
                </Text>
            )}
        </>
    );
};

export default CountdownTimer;
