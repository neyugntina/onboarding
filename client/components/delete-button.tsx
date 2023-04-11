import { Button, Container, Input, Select, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetAll, clear } from "./client-calls";

export const DeleteButton = () => {
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState("");
  console.log("ID:", id);
  const handleId = (event: any) => setId(event.target.value);

  const loadData = async () => {
    setData(await GetAll());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await clear(id);
        }}
      >
        <VStack>
          <label>Delete an Item!</label>
          <Container>
            <Select placeholder="Select" onChange={handleId}>
              {data &&
                data.map((d, i) => (
                  <option key={`item-${i}`} value={d.id}>
                    {d.name} - {d.description}
                  </option>
                ))}
            </Select>
          </Container>
          <Button type="submit" colorScheme="teal">
            {" "}
            Delete
          </Button>
        </VStack>
      </form>
    </>
  );
};
