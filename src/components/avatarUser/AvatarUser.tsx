import React, { SyntheticEvent } from 'react'

import { ButtonUpload } from 'components'
import { useModal } from 'components/modal/hooks/useModal'
import { Modal } from 'components/modal/Modal'
import { useSelector } from 'react-redux'
import { selectorAvatarUser } from 'store'

import defaultAvatar from '../../assets/image/avatar.png'

import style from './AvatarUser.module.sass'

export const AvatarUser = () => {
  let avatar = useSelector(selectorAvatarUser)
  const { onCloseModal, onOpenModal, isOpenModal } = useModal()

  if (!avatar) {
    avatar = defaultAvatar
  }

  const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultAvatar
  }

  return (
    <div className={style.avatarUserWrapper}>
      <Modal onClose={onCloseModal} isOpen={isOpenModal}>
        {<img src={avatar} alt="avatarUser" />}
      </Modal>
      <img
        className={style.imgAvatar}
        src={avatar}
        alt="avatarUser"
        onError={onError}
        onLoad={onError}
        onClick={onOpenModal}
      />
      <div className={style.buttonUploadWrapper}>
        <ButtonUpload />
      </div>
    </div>
  )
}
