const classmate = [
'철수',
'영희',
'훈이'
]




export default function mappage() {


    return(

         <div>
             {classmate.map(data => <div>{data},어린이</div>)}
</div>
    )
    
}