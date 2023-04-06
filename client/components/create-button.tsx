import { Button, Input, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { create } from "./client-calls";

// type CreateButtonProps = {
//   name: string;
//   description: string;
// };

export const CreateButton = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleName = (event: any) => setName(event.target.value);
  const handleDescription = (event: any) => setDescription(event.target.value);
  console.log("client:", name, description);

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await create(name, description);
        }}
      >
        <VStack>
          <label>Create an Item!</label>
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
            Create
          </Button>
        </VStack>
      </form>
    </>
  );
};
