import { Button, Container, Select, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetAll, getOne } from "./client-calls";

export const GetOneButton = () => {
  const [data, setData] = useState<any[]>([]);
  const [one, setOne] = useState<any>();
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
          setOne(await getOne(id));
        }}
      >
        <VStack>
          <label>Get an Item!</label>
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
            Get
          </Button>
          <div>
            {one && (
              <>
                Name: {one.name}
                <br /> Description: {one.description}
              </>
            )}
          </div>
        </VStack>
      </form>
    </>
  );
};
