import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                background: '#fff',
                    border: '1px solid #00cc22',
                    width: 18,
                    height: 18,
                    '&::before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        boxShadow: 0
                    },
                    },
                '& .MuiSlider-rail': {
                    background: '#8B8B8B'
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
