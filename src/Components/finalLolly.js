import React from "react"
import Header from "./Header"
import Lolly from "./Lolly"
import "./finalLolly.css"

export default function FinalLolly(props) {
  let detailsoflolly = props.detailsoflolly;
  return (
    <div className="container">
      <Header />
      <div className="Lollies">
        <div className="flolly">
          <Lolly
            fillLollyTop={detailsoflolly.color1}
            fillLollyMiddle={detailsoflolly.color2}
            fillLollyBottom={detailsoflolly.color3}
          />
        </div>

        <div className="linkbox" >
            <div className="linklabel">
                <p>Your lolly is freezing. Share it with this link:</p>
            </div>
            <div className="link">
                <p>https://vlolly.net/lolly/tS8yjSGwc</p>
            </div>
            <div className="details"> 
                <div className="detailsdiv">
                    <h2>To,</h2>
                    <h2 className="receiver">Dear {detailsoflolly.recipientName}</h2>
                    <p  className="message">"{detailsoflolly.message}"</p>
                    <h3 className="sender">From</h3>
                    <h3 className="sender">----{detailsoflolly.sender}</h3>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}
