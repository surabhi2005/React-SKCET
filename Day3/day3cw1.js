import React,{ Component } from 'react';
class ToggleMessage extends Component{
    constructor()
    {
        super();
        this.state={
            isvisible:false,
        }
    }
    togglemsg=()=>
    {
        this.setState(prevState=>(
            {
                isvisible:!prevState.isvisible
            }
        )
        )

    }
    render()
    {
        return(
            <div>
                <button onClick={this.togglemsg}>
                    {this.state.isvisible ?'HideComponent' : 'ShowComponent'}
                </button>
                {this.state.isvisible && <p>Hi how are you?</p>}
            </div>
        )
    }
}
export default ToggleMessage;