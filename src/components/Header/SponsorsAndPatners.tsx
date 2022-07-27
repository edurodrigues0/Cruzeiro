import { Image, Stack } from "@chakra-ui/react";

import { sponsors } from "../../utils/Sponsors";

export function SponsorsAndPatners() {
  function sponsorsSizesValue(type: string) {
    if(type === "master") {
      return ['2rem','3.5rem','5rem'];
    }
    if(type === "sponsor") {
      return ['1.8rem','2.5rem','3rem'];
    }
    return ['1.7rem','2rem','2.7rem'];
  }
  
  return (
    <Stack 
      direction="row" 
      alignItems="center"
      m='0 auto'
      spacing={["0.3rem", "0.6rem", "1.2rem"]}
    >
      {sponsors.map((sponsor) => {
        return (
          <Image
            key={sponsor.id}
            src={sponsor.image}
            alt={sponsor.name}
            w={sponsorsSizesValue(sponsor.type)}
          />
        );
      })}
    </Stack>
  );
}
