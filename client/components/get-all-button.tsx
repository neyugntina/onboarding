import { Button, Container, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GetAll } from "./client-calls";
import { ListItem } from "./list-item";

export const GetAllButton = () => {
  const [data, setData] = useState<any[]>([]);
  return (
    <>
      <VStack>
        <label>Get all Items!</label>
        <Button
          colorScheme="teal"
          onClick={async (event) => {
            setData(await GetAll());
          }}
        >
          Get All
        </Button>
        <Container>
          {data &&
            data.map((d, i) => (
              <ListItem
                key={`item-${i}`}
                name={d.name}
                description={d.description}
              />
            ))}
        </Container>
      </VStack>
    </>
  );
};
