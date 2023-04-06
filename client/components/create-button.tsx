import { Button, Input, Text, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { create } from "./GetAll";

type CreateButtonProps = {
  name: string;
  description: string;
};

export const CreateButton: FC<CreateButtonProps> = ({ name, description }) => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <>
      <Button {...buttonProps} colorScheme="teal" onClick={async (event) => {
        event.preventDefault();
        await create({
            name: name
        },
        {description: description})
      }}>
        Create
      </Button>
      <Input {...disclosureProps} variant="outline" placeholder="name" />
      <Input {...disclosureProps} variant="outline" placeholder="description" />
      {name}
      <i>{description}</i>
    </>
  );
};
