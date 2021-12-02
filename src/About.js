import { useEffect, useRef, useState } from "react"

function Button(props) {
    const {text,handleClick} = props

    return (
        <button onClick={handleClick}>{text}</button>
    )
}
function DivContent(props) {
    const {text,children} = props

    return (
        <div>
            {text}
            {children}
        </div>
    )
}
function DivContentParent(props) {
    const {text,children} = props

    return (
        <div>
            {text}
            {children}
        </div>
    )
}
function DivContentChild(props) {
    const {text,handleClick} = props

    return (
        <div onClick={handleClick}>{text}</div>
    )
}


export function About() {
    let [hiText,setHiText] = useState(0)
    let [isOpen,setIsOpen] = useState(true)
    function closeOpen(){
        setIsOpen(false)
    }
    function changeHiText(){
        setHiText(hiText+1)
    }
    let hiTextRef = useRef(hiText)
    hiTextRef.current = hiText
    useEffect(()=>{
        if(isOpen){
            const id = setInterval(()=>{
             console.log( hiTextRef.current )
             setHiText(currentCount => currentCount + 1)
            },1000)
            return () => { clearInterval(id); }
        }
    },)
    return (
        <div>
            <h1>About</h1>
            <DivContent text={hiText} >
                <DivContentParent text="我是父组件">
                    <DivContentChild text={"我是子组件"+hiText} handleClick={closeOpen} />
                </DivContentParent>
            </DivContent>
            <Button text="hello" handleClick={changeHiText} />
        </div>

    );
}
  