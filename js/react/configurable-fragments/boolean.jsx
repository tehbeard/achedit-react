import React from 'react';
export class BooleanFragment extends React.Component {
  render() {
    return (<div className="form-group">
            <label className="control-label col-sm-3" htmlFor={this.props.field.key} >
                {this.props.field.name}:
            </label>
            <div className="col-sm-9">
                <input className="form-control" type="checkbox" name={this.props.field.key}/>
            </div>
        </div>)
  }
} 