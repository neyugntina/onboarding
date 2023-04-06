import { Text } from "@chakra-ui/react";
import { FC } from "react";

type ListItemProps = {
  name: string;
  description: string;
};

export const ListItem: FC<ListItemProps> = ({ name, description }) => {
  return (
    <>
      <Text>
        {name}
        <i>{description}</i>
      </Text>
    </>
  );
};
