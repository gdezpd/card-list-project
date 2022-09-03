import React from 'react'

import { CustomButtonBox } from 'components/button'
import { IconDeleteSvg } from 'components/iconSVG/iconDeleteSVG/IconDeleteSVG'
import { IconEditSvg } from 'components/iconSVG/iconEditSVG/IconEditSVG'
import { IconLearnSVG } from 'components/iconSVG/iconLearnSVG/IconLearnSVG'
import { TablePackListAction } from 'components/table/tablePackList/tablePackListAction/TablePackListAction'
import { BackValueType } from 'types'

import { TableCell } from '../../component/tableCell/TableCell'

import style from './TableCardRow.module.sass'

type TableCardRowType = {
  user_id: string
  authUser_id: string
  _id: string
  question: string
  answer: string
  grade: number
  updated: string
  create: string
  onClickAction?: (idCard: string, backValue: BackValueType) => void
}

export const TableCardRow = ({
  user_id,
  authUser_id,
  answer,
  question,
  updated,
  grade,
  _id,
  onClickAction,
}: TableCardRowType) => {
  const onClickActionHandle = (backValue: BackValueType) => {
    onClickAction && onClickAction(_id, backValue)
  }

  const isAuthTable = authUser_id === user_id

  return (
    <div className={style.rowWrapper}>
      <TableCell title={question} />
      <TableCell title={answer} />
      <TableCell title={updated} />
      <TableCell title={updated} />
      <TableCell>{grade}</TableCell>
      {isAuthTable && (
        <TablePackListAction user_id={user_id} authUser_id={authUser_id}>
          <CustomButtonBox color="link" onClick={() => onClickActionHandle('edit')}>
            <IconEditSvg />
          </CustomButtonBox>
          <CustomButtonBox color="link" onClick={() => onClickActionHandle('delete')}>
            <IconDeleteSvg />
          </CustomButtonBox>
        </TablePackListAction>
      )}
    </div>
  )
}
