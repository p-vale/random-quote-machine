import React from "react"

export default function Commandsbox(props) {
    return(
        <div id='commands'>
            <div id='tweet'>
                <img src={props.tw} alt=''></img>
                <a id='tweet-quote' 
                        class="twitter-share-button"
                        href="https://twitter.com/intent/tweet"
                        data-text={props.quotetxt + ' ' + props.authortxt}
                    >TWEET THIS</a>
            </div>
            <button id='new-quote' onClick={props.getQuote}>GET NEW QUOTE</button>
        </div>
    )
}