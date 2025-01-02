import React from "react";
import { Stack, Input, StackDivider } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
   return (
      <Stack
         w='100%'
         divider={<StackDivider />}
         direction='row'
         bgColor='white'
         align='center'
         p={2}
         borderRadius={5}
      >
         <Input
            variant='unstyled'
            w='100%'
            placeholder='Buscá un producto...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <Search2Icon color='segundo' marginX={1} />
      </Stack>
   );
};

export default SearchBar;
