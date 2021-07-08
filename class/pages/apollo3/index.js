import { useState } from 'react'
import {useMutation, gql} from '@apollo/client'


export default function apolloPage () {

const [seller, setSeller] = useState('')
const [name, setName] = useState('')
const [detail, setDetail] = useState('')
const [price, setPrice] = useState('')

function onChangeSeller(event){
    setSeller(event.target.value)
}

function onChangeName(event){
    setName(event.target.value)
}

function onChangeDetail(event){
    setDetail(event.target.value)
}

function onChangePrice(event){
    setPrice(event.target.value)
}

const [asdf] = useMutation(
    gql`
    mutation alkj ($aaa: String , $bbb: CreateProductInput! ){
        createProduct(seller:$aaa, createProductInput: $bbb ){
            message
        }
    }
`
)






    async function onClickSubmit(){

        try{
            const result = await asdf({
            variables:{
                aaa:seller,
                bbb:{
                    name:name,
                    detail:detail,
                    price:Number(price)
                }
            }
        })

        setSeller('')
        setName('')
        setDetail('')
        setPrice('')

        if(seller === ''){
            alert('판매자 칸 빔')
        }
        if(name === ''){
            alert('이름')
        }
        if(detail === ''){
            alert('명세')
        }
        if(price === ''){
            alert('가격')
        }
        


        alert(result.data.createProduct.message)

    }catch(error){
        if(price !== Number){
            alert('가격은 숫자로')
        }
        alert(error.message)
    }
    
        }





    
    return(
        <>    
            <div>
            판매자:<input type='text' onChange={onChangeSeller} value={seller} />
            상품명:<input type='text' onChange={onChangeName} value={name} />
            상품상세:<input type='text' onChange={onChangeDetail} value={detail}/>
            가격:<input type='text' onChange={onChangePrice} value={price}/> 
            </div>
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
        )
}