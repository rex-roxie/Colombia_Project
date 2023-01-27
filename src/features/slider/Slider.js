import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, getId } from "./sliderSlice";

export function Slider() {
    const id = useSelector(getId);
    const dispatch = useDispatch();

    const increaseId = () => {
        dispatch(increment());
    }

    const decreaseId = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h1>{id}</h1>
            <button onClick={increaseId}>Increase id</button>
            <button onClick={decreaseId}>Decrease id</button>
        </div>
    );
}