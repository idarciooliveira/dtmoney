import Modal from 'react-modal'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
    onRequestClose: () => void
    isOpen: boolean

}
export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h1>Modal</h1>
        </Modal>
    )
}