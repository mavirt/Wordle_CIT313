import React from "react";
import {useSelector} from "react-redux";
import {colorTypes} from "../wordAssets/colorTypes";
import initState from "../redux/store/initState";

function GL(props){



    return (
        <div className={"gl"}>
            {props.vl}
        </div>
    );
}
export default GL;