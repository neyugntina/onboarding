import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { GetDropDown } from "./get-one";
import { FC } from "react";

type RenderModalProps = {
  name: string;
  description: string;
  id: number;
};

export const RenderModal: FC<RenderModalProps> = ({
  name,
  description,
  id,
}) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <>
      <Button {...buttonProps}>Get One</Button>
      <Select
        {...disclosureProps}
        placeholder="Select"
        onChange={(event) => {
          console.log("Selected the ID", event.target.value);
        }}
      >
        <GetDropDown name={name} description={description} id={id} />
      </Select>
      {/* <Button onClick={onOpen}>Get One</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get One</ModalHeader>
          <ModalBody>
            <Select
              placeholder="Select"
              onChange={(event) => {
                console.log("Selected the ID", event.target.value);
              }}
            >
              <GetDropDown name={name} description={description} id={id} />
            </Select>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
};
// <ModalThing
//   options={
//     data.map((d, i) => ({
//       optionName: d.name,
//       optionDescription: d.description
//     })
//   }
// ></ModalThing>
