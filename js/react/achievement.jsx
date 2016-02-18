import React from 'react';
 
export default class Achievement extends React.Component {
  render() {
    return <form className="form-horizontal">
<div className="form-group"><label className="control-label col-sm-3" htmlFor="slug">Slug:</label><div className="col-sm-9"><input className="form-control" type="text" data-key="slug"/></div></div>
<div className="form-group"><label className="control-label col-sm-3" htmlFor="name">Name:</label><div className="col-sm-9"><input className="form-control" type="text" data-key="name"/></div></div>
<div className="form-group"><label className="control-label col-sm-3" htmlFor="desc">Description:</label><div className="col-sm-9"><input className="form-control" type="text" data-key="descrip"/></div></div>
<div className="form-group"><label className="control-label col-sm-3" htmlFor="hidden">Hidden:</label><div className="col-sm-9"><input className="form-control" type="checkbox" data-key="hidden"/></div></div>
<div className="form-group"><label className="control-label col-sm-3" htmlFor="broadcast">Broadcast to:</label><div className="col-sm-9"><select className="form-control" data-key="broadcast">
<option value="BROADCAST">All</option>
<option value="PERSON">Recepient only</option>
<option value="NONE">Nobody</option>
</select></div></div>
<h4 onClick={this.handleClick}>Triggers</h4>
<ach-configurable-list type="trigger"></ach-configurable-list>
<hr/>
<h4>Rewards</h4>
<ach-configurable-list type="reward"></ach-configurable-list>
</form>
  }
  handleClick(e){
      alert("hi");
  }
}

