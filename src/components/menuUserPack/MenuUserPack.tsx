import React from 'react'

import {
  CustomButtonBox,
  IconCirclePointSVG,
  IconDeleteSvg,
  IconEditSvg,
  IconLearnSVG,
  Menu,
} from 'components'

export const MenuUserPack = () => {
  const editPack = () => {}
  const deletePack = () => {}
  const learnPack = () => {}

  return (
    <Menu headMenu={<IconCirclePointSVG />}>
      <CustomButtonBox color={'link'} onClick={editPack}>
        <IconEditSvg />
        Edit
      </CustomButtonBox>
      <CustomButtonBox color={'link'} onClick={deletePack}>
        <IconDeleteSvg />
        Delete
      </CustomButtonBox>
      <CustomButtonBox color={'link'} onClick={learnPack}>
        <IconLearnSVG />
        Learn
      </CustomButtonBox>
    </Menu>
  )
}
