import React from 'react';
export class SelectFragment extends React.Component {
  render() {
    return (<div className="form-group">
            <label className="control-label col-sm-3" htmlFor={this.props.field.key} >
                {this.props.field.name}:
            </label>
            <div className="col-sm-9">
                <select className="form-control" type="checkbox">
                {this.props.field.values.map((v)=>(<option>{v}</option>) )}
                </select>
            </div>
        </div>)
  }
} 