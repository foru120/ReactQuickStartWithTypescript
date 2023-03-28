import { useEffect, useRef, useState } from 'react';

const App = () => {
    const [name, setName] = useState("");
    const refTel = useRef("010-2222-2222");
    const elName: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const goFirstInputElement = () => {
        if (elName.current) elName.current.focus();
    };
    useEffect(goFirstInputElement, []);

    return (
        <div className='boxStyle'>
            <h2>상태 데이터</h2>
            <input ref={elName} type="text" value={name} defaultValue="홍길동" />
            <br />
            <div> 상태(name) : {name}</div>
            <hr />
            <input type="text" onChange={(e) => (refTel.current = e.target.value)} />
            <br />
            <div> refTel 값 : {refTel.current}</div>
        </div>
    );
};

export default App;