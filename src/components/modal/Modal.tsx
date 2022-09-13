import React, { ReactElement, ReactNode, useEffect, useRef } from 'react'

import { CustomButton } from 'components'
import { useModalClass } from 'components/modal/hooks/useModalClass'

import style from './Modal.module.sass'

type ModalType = {
  onClose: () => void
  isOpen: boolean
  children?: ReactNode
}

export const Modal: React.FC<ModalType> = (props): ReactElement | null => {
  const { onClose, isOpen, children } = props

  const { classModal, classContent } = useModalClass(isOpen)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyPress)

    return () => {
      document.addEventListener('keydown', onKeyPress)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const onCloseOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClose()
      } else {
        return
      }
    }

    document.addEventListener('mousedown', onCloseOutside)

    return () => {
      document.addEventListener('mousedown', onCloseOutside)
    }
  }, [ref.current])

  return (
    <div className={classModal}>
      <div className={classContent} ref={ref}>
        <div className={style.buttonClose}>
          <CustomButton color="link" disabled={false} onClick={onClose}>
            <div className={style.close} />
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  )
}
