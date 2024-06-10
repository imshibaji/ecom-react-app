import { useContext } from "react";
import { DataContext } from "../services/DataContext";

export function Display({title}){
    const { data } = useContext(DataContext);
    return (
        <div className="display">
            <div className="display-text">{ data || title || 'Display Part'}</div>
        </div>
    );
}