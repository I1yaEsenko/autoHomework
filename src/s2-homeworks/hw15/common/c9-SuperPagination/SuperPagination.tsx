import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
	id?: string
	page: number
	itemsCountForPage: number
	totalCount: number
	onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
	{
		page, itemsCountForPage, totalCount, onChange, id = 'hw15',
	}
) => {
	const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

	const onChangeCallback = (event: any, page: number) => {
		onChange(page, itemsCountForPage)
	}

	const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		onChange(page, +event.currentTarget.value)
	}

	return (
		<div className={s.pagination}>
			<Pagination
				id={id + '-pagination'}
				sx={{
					"& .MuiPaginationItem-root": {
						fontSize:16,
						border: 'none',
						display:'flex',
					},
					"& .MuiPaginationItem-root.Mui-selected": {
						backgroundColor: "#0066CC",
						color: '#fff',
					},
				}}
				page={page}
				count={lastPage}
				onChange={onChangeCallback}
				variant="outlined"
				shape="rounded"

				hideNextButton
				hidePrevButton
				className={s.paginationItem}
			/>

			<span className={s.text1}>
                Показать
            </span>

			<SuperSelect
				id={id + '-pagination-select'}
				value={itemsCountForPage}
				options={[
					{id: 4, value: 4},
					{id: 7, value: 7},
					{id: 10, value: 10},
				]}
				onChange={onChangeSelect}
				className={s.select}
			/>
			{itemsCountForPage === 4 ? <span className={s.text2}>
                строки в таблице
            </span> :
				<span className={s.text2}>
                строк в таблице
            </span>}
		</div>
	)
}

export default SuperPagination
