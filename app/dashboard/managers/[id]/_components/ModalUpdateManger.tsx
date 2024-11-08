"use client"
import {Modal, ModalContent, ModalHeader, ModalBody,  Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPen } from "react-icons/lu";

export default function ModalUpdatemanager({children}: {children:ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPen size={20}/></Button>
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}