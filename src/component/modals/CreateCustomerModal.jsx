import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const CreateCustomer = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} color="primary">Tambah Customer</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className=" flex flex-col gap-1">Masukan Detail Customer</ModalHeader>
                        <ModalBody>
                            <Input label="Masukan Nama" placeholder="Masukan nama anda" />
                            <Input label="No Handphone" placeholder="Masukan no handphone anda" />
                            <Input label="Masukan Alamat" placeholder="Masukan alamat anda" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={onClose} >Submit</Button>
                            <Button onPress={onClose}>Close</Button>
                        </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateCustomer;