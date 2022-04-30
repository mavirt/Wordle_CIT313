import {colorTypes} from "../../wordAssets/colorTypes";

function initState(){

    return {
        guesses: [
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        try:0,
        answer:["t","e","a","c","h"],
        change: false,
        end:false,
        win:false
    }
}

export default initState;