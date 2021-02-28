import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext } from './components/checklist/App.js'
import TextField from '@material-ui/core/TextField';

const TodoOverview = (props) => {
    const { data, todo } = props
    const [load, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    const {theme, setTheme} = useContext(ThemeContext);
    console.log(theme)
    return (
        <>
            <div style={{display: 'flex'}}>
                <h4>{theme}</h4>
                <p>{data.total}</p>
            </div>
            <div style={{display: 'flex'}}>
                <button style={{height: '2em', width: '2em'}} onClick={()=>{setTheme('dark')}} />
            </div>
        </>
    )
}

export default TodoOverview