import React from "react"

export default function Commandsbox(props) {
    let currentQuote = props.quotetxt + ' -' + props.authortxt
    return(
        <div id='commands'>
            <div id='tweet'>
                <img src={props.tw} alt=''></img>
                <a id='tweet-quote' 
                        class='twitter-share-button'
                        target="_blank"
                        href={`https://twitter.com/intent/tweet/?text=${currentQuote}`}
                    >TWEET THIS</a>
            </div>
            <button id='new-quote' onClick={props.getQuote}>GET NEW QUOTE</button>
        </div>
    )
}