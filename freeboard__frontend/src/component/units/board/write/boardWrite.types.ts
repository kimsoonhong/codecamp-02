import { ChangeEvent ,MouseEvent} from 'react'



export interface BoardwriteUI {
    onChangeInputs : (event: ChangeEvent<HTMLInputElement>) => void
    onClickSubmit : (event: MouseEvent<HTMLButtonElement>) => void
    onClickEdit : (event: MouseEvent<HTMLButtonElement>) => void
    isEdit? : boolean
    active : boolean
    passwordError :string
    writerError : string
    titleError : string
    contentsError : string
    addressError : string
}

