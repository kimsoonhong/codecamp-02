export default function State2 (){



    let count = 9
    
    function 함수 (){
        count = count +1
        document.getElementById('aaa').innerText = count
    }



    return(
        <>
            <div id="aaa">{count}</div>
            <button onClick={함수}>+1</button>
        </>
    )
}