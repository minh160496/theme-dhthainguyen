import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FormContact } from "../../components/FormContact";

interface IModalBase {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"gray.100"} rounded={"sm"}>
            <FormContact />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
