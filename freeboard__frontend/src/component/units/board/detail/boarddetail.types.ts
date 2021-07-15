
import { ChangeEvent ,MouseEvent, MouseEventHandler} from 'react'



export interface IBoardContainerProps {
    
    isEdit? : boolean

}

export interface IBoardPresenterProps {


  
    data : any
    
    onClickEdit: () => void
    onClickList : () => void
    onClickDelete: () => void
} 
