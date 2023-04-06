import { Button, Container, Input, Select, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetAll, update } from "./client-calls";

export const EditButton = () => {
  const [data, setData] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const handleName = (event: any) => setName(event.target.value);
  const handleDescription = (event: any) => setDescription(event.target.value);
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
          await update(name, description, id);
        }}
      >
        <VStack>
          <label>Edit an Item!</label>
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
          <Input
            variant="outline"
            onChange={handleName}
            value={name}
            placeholder="name"
          />
          <Input
            variant="outline"
            onChange={handleDescription}
            value={description}
            placeholder="description"
          />
          <Button type="submit" colorScheme="teal">
            {" "}
            Edit
          </Button>
        </VStack>
      </form>
    </>
  );
};

// (event) => {
//   console.log("Selected the ID", event.target.value);
// };
