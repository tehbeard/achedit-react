import React from 'react';
export class TriggerFragment extends React.Component {
  render() {
    return (<div className="frag-trigger">
            <div className="form-group">
                <label className="control-label col-sm-3" htmlFor={this.props.field.key} >
                    {this.props.field.name}:
                </label>
                <div className="col-sm-9">
                    {/* Dropdown to select a trigger here */}
                </div>
            </div>
            {/*  list of configurable goes here */}
        </div>)
  }
} 