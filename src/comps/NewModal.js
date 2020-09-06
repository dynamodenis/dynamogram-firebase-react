import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class NewModal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  
  }

  
  


  render() {
      
    
    return (
      <div className='backdrop'  style={{width: '100%', height:'100%',color: 'rgba(0,0,0,0.5)'}}>
        {/* <a
        //   className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
        <img src={this.selectedImg} alt="Modal Image"/>
        </a> */}
        {/* <!-- Modal Trigger --> */}
        {/* <button data-target="modal1" className="btn modal-trigger">Modal</button> */}
        <img data-target="modal1" src={this.props.selectedImg} alt="Modal Image"/>
 

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div>
            <img src={this.props.selectedImg} alt=""/>
          </div>
          {/* <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default NewModal;