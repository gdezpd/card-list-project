import style from '../Modal.module.sass'

export const useModalClass = (isOpen: boolean) => {
  const classModal = isOpen ? style.modalOpen : style.modalClose
  const classContent = isOpen ? style.contentOpen : style.contentClose

  return { classModal, classContent }
}
