import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const CreateProductModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} color="primary">Tambah Barang </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className=" flex flex-col gap-1">Masukan Detail Barang</ModalHeader>
                        <ModalBody>
                            <Input label="Masukan Nama" placeholder="Masukan nama barang" />
                            <Input label="Masukan Nilai" placeholder="Masukan Berat atau Banyak" />
                            <Input label="Masukan Harga" placeholder="Harga Satuan/Harga Kiloan" />
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

export default CreateProductModal;