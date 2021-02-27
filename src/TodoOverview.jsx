import React, {useState, useEffect} from 'react'

import TextField from '@material-ui/core/TextField';

const TodoOverview = (props) => {
    const { data, todo } = props
    const [load, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    const [input, setInput] = useState('Default String Here')

    // useEffect(() => {
    //     setLoading(true)
    //     setCount(0)
    //     setLoading(false)
    // }, [])

    useEffect(()=>{
        console.log(111)
        setCount(prevCount => prevCount+1)
    }, [todo])

    return (
        <>
            <div style={{display: 'flex'}}>
                <h4>Total Tasks</h4>
                <p>{data.total}</p>
            </div>
            <div style={{display: 'flex'}}>
                <h4>Left Tasks</h4>
                <p>{data.left}</p>
            </div>
            <div style={{height: '10vh', width: '95vw'}}>
                <TextField 
                    id="outlined-basic" 
                    label={'This is a random input example'}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    variant="outlined"
                    />
            </div>
            
            <h1>deleted - {load ? 'loading...' : count}</h1>
        </>
    )
}

export default TodoOverview