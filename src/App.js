import React from 'react'
import importedData from './quotesData'
import tw from './twitter-icon.png'
import Quotebox from './components/Quotebox'
import Commandsbox from './components/Commandsbox'



export default function App() {
    const [quoteObj, setQuote] = React.useState('')


    function getQuote() {
        const arr = importedData
        const randomNum = Math.floor(Math.random() * arr.length)
        setQuote(arr[randomNum])
    }

    let Quote = quoteObj? quoteObj.quote : importedData[16].quote
    let Author = quoteObj? quoteObj.author : importedData[16].author

    return (
        <div id='container'>
          <div id='box'>
              <Quotebox 
                authortxt={Author} 
                quotetxt={Quote}
                />
              <Commandsbox 
                tw={tw} authortxt={Author} 
                quotetxt={Quote} 
                getQuote={getQuote}
                />
          </div>
        </div>
    )
}