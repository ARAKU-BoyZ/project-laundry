import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input, ModalFooter } from "@nextui-org/react";


const CreateTransactionModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <>
            <Button onPress={onOpen} color="primary">Tambah Transaksi</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Transaksi Baru</ModalHeader>
                            <ModalBody>
                                <h6 className="font-semibold">Kode Transaksi</h6>
                                <Input label="Masukan Kode"/>
                                <h6 className="font-semibold">Nama Konsumen</h6>
                                <Input label="Pilih Konsumen"/>
                                <h6 className="font-semibold">Pilih Paket Laundry</h6>
                                <Input />
                                <h6 className="font-semibold">Qty (Kg)</h6>
                                <Input />
                                <h6 className="font-semibold">Total Bayar</h6>
                                <Input />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
                                    Submit
                                </Button>
                                <Button onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}



export default CreateTransactionModal;