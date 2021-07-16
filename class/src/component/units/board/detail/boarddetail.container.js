import BoardDetailUI from './boarddetail.presenter';
import { FETCH_BOARD } from './boarddetail.queries';

import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
 
export default function BoardDetailContainer() {
    const router = useRouter();

    const { data } = useQuery(
        FETCH_BOARD,
        {variables:{ boardId: router.query.boardId }}
    )

    return(
        <BoardDetailUI 
            data={data}
        />
    )
}