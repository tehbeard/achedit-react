import React from 'react';
export default class ConfigurableList extends React.Component {
  render() {
    return <div className="fluid-container">
<form id="newType" className="row">
<div className="col-xs-9"><select className="form-control" name="type"></select></div>
<div className="col-xs-3"><button className="form-control btn btn-primary btn-block" type="button" id="add">Add</button></div>
</form>
<div id="items" className="row" style="border:1px dashed black;min-height:20px;padding-left:15px">
</div>
</div>
  }
  
  
}