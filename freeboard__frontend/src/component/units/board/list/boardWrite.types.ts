import {ChangeEvent, MouseEvent} from 'react'


export interface BoardwriteUI {
    onClickSubmit : (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>)=> void
    active : boolean
    onChangeInputs : (event: ChangeEvent<HTMLInputElement>) => void
    isEdit? : boolean
    onClickEdit : ()=> void

    onClick : (event: MouseEvent<HTMLDivElement, MouseEvent>)=> void
}

