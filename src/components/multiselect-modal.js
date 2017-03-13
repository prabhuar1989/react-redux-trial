import React, { Component } from "react";
import ReactModal from "react-modal";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import FilteredMultiSelect from "react-filtered-multiselect";

import {selectShips, deselectShips} from "../actions/index";

var bootstrapClasses = {
      filter: 'form-control',
      select: 'form-control',
      button: 'btn btn btn-block btn-default',
      buttonActive: 'btn btn btn-block btn-primary'
}


class MultiselectModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);

  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
   handleSelectionChange(selectedShips) {
    //console.log("handleSelectionChange called with selectedShips : ",selectedShips);
     this.props.selectShips(selectedShips);
     this.handleCloseModal();
  }

  handleDeselect(index) {
    var selectedShips = this.state.selectedShips.slice()
    selectedShips.splice(index, 1)
    this.setState({selectedShips})
  }

  render () {
    return (
        <div className = "form-inline">
              {this.props.selectedShips.length > 0 && 
                  <ul className = "form-group">
                    {this.props.selectedShips.map((ship, i) =>
                    <li key={ship.id}>
                      {`${ship.name}`}
                         <button type="button" onClick={this.handleDeselect.bind(null, i)}>&times;</button>
                    </li>)}
               </ul>}
             &nbsp;
              <div className = "form-group">
                <button onClick={this.handleOpenModal}>
                  <span className = "glyphicon glyphicon-search"></span>
                </button></div>

        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Ships">
           <div className = "row">
             <h4>Select one or more ships..</h4>
             <div className = "col-md-3">
                
                 <FilteredMultiSelect
                 classNames={bootstrapClasses}
                 onChange={this.handleSelectionChange}
                 options={this.props.shipList}
                 selectedOptions={this.props.selectedShips}
                 textProp="name"
                 valueProp="id"
                 />
               </div>
            </div>
           <hr/>
          <button className = "btn btn-danger col-md-2" onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
    </div>
     
    );
  }
}

//const props = {};

const mapStateToProps = ({form}) => {
    return {
        shipList : form.shipList,
        selectedShips : form.selectedShips
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectShips,deselectShips},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(MultiselectModal);