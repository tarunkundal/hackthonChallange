import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
} from "@chakra-ui/react";
import Icons from "@/assets/icons";

interface Props {
    getSelectedItems: (selectedItems: string[]) => void
    filterToRemove: string
}

const FilterComp = (props: Props) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

    const filters = ["All", "Active", "Upcoming", "Past"];
    const levels = ["Easy", "Medium", "Hard"];

    const handleFilterChange = (filter: string) => {
        setSelectedFilters((prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter]
        );
    };

    const handleLevelChange = (level: string) => {
        setSelectedLevels((prev) =>
            prev.includes(level)
                ? prev.filter((l) => l !== level)
                : [...prev, level]
        );
    };

    useEffect(() => {
        props.getSelectedItems([...selectedFilters, ...selectedLevels])
    }, [selectedFilters, selectedLevels])

    // logic to remove the filer or level from the parent component through props
    useEffect(() => {
        if (props.filterToRemove) {
            if (selectedFilters.includes(props.filterToRemove)) {
                setSelectedFilters(selectedFilters.filter((filter) => filter !== props.filterToRemove));
            } else if (selectedLevels.includes(props.filterToRemove)) {
                setSelectedLevels(selectedLevels.filter((level) => level !== props.filterToRemove));
            }
        }
    }, [props.filterToRemove]);

    return (
        <Menu closeOnSelect={false}>
            {({ isOpen }) => (<>
                <MenuButton as={Button} w={'25%'} rightIcon={isOpen ? <Icons.UpArrow /> : <Icons.DownArrow />}>
                    Please Select
                </MenuButton>
                <MenuList minWidth="240px">
                    <Box p={2} borderBottom="1px solid" borderColor="gray.200">
                        <Text fontWeight="bold" mb={2}>
                            Filters
                        </Text>
                        {filters.map((filter) => (
                            <MenuItem key={filter}>
                                <Checkbox
                                    isChecked={selectedFilters.includes(filter)}
                                    onChange={() => handleFilterChange(filter)}
                                >
                                    {filter}
                                </Checkbox>
                            </MenuItem>
                        ))}
                    </Box>
                    <Box p={2}>
                        <Text fontWeight="bold" mb={2}>
                            Levels
                        </Text>
                        {levels.map((level) => (
                            <MenuItem key={level}>
                                <Checkbox
                                    isChecked={selectedLevels.includes(level)}
                                    onChange={() => handleLevelChange(level)}
                                >
                                    {level}
                                </Checkbox>
                            </MenuItem>
                        ))}
                    </Box>
                </MenuList>
            </>)}
        </Menu>
    );
};

export default FilterComp;
