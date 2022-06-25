import { RootState } from "@/store/root";
import { countActions } from "@/store/slice/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Test: React.FC = () => {
    const count = useSelector((state: RootState) => state.countSlice.count);
    const dispatch = useDispatch()
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
            test page
        </div>
    );
};

export default Test;
