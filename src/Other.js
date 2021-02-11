import React, { Component , useState } from 'react';
import axios from 'axios';
 
// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux';
 
class Other extends Component {
    
    state = {
        memes:[],
        displayValue:'none'
    }
    
 
  componentDidMount() {
    this.setState({ isLoading: true });
 
    const url='https://frozen-cliffs-77329.herokuapp.com/memes';
    
    axios.get(url)
    .then(response => response.data)
    .then((data) => {
      this.setState({ memes: data })
      console.log(this.state.memes)
     })
    }

    handleClick() {
      this.setState(({ displayValue }) => ({
        displayValue:'block'
      }));
    }
    handleCloseClick() {
      this.setState(({ displayValue }) => ({
        displayValue:'none'
      }));
    }
  render (){
    const spacing = 30;
    return (
        <div className="Other">

            <h1>Memes</h1>
            <br/>
            <div className="col-xs-12 memebox" style={{paddingLeft:spacing+'px'}} >
                {this.state.memes.map((meme) => (
                    
                        <div className="meme-body">
                            <p className="meme-name">{meme.name}</p> 
                            <p className="meme-caption" >{meme.caption}</p>
                            <p className="meme-url" >
                              <img src={meme.url} width="150" height="150" />
                              {/* <button  onClick={() => this.handleClick()}>Open Form</button> */}
                            </p>
                            {/* <div class={meme.name} id={meme.name} style={{position: "fixed",bottom: "0",  right: "15px",  border: "3px solid #f1f1f1",  zIndex: "9",display:this.state.displayValue}}>
                              <form action="/action_page.php" class="form-container">
                                <h1>{meme.name}</h1>

                                <label for="Caption"><b>Caption</b></label>
                                <input type="text" placeholder="Enter Caption" name="name" required />

                                <label for="psw"><b>URL</b></label>
                                <input type="text" placeholder="Enter Url" name="url" required />

                                <button type="submit" class="btn">Update</button>
                                <button type="button" class="btn cancel" onClick={() => this.handleCloseClick()}>Close</button>
                              </form>
                              
                            </div> */}
                        </div>
                    
                ))}
        </div>
        </div>
    );
  }
}
 
export default Other;