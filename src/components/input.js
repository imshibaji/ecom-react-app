import { useState, useContext } from "react";
import { DataContext } from "../services/DataContext";

export function Input({change}){
    const [title, setTitle] = useState('');

    const { setData } = useContext(DataContext);

    const onChange = (e) => {
        setTitle(e.target.value);
        if(change) {
            change(e.target.value);
            setData(e.target.value);
        }
    }

    return (
        <div className="input">
            <div className="input-text">
                <input type="text" placeholder={title || 'Please Input Something'} className="input-field" value={title} onChange={e => onChange(e)} />
            </div>
        </div>
    );
}