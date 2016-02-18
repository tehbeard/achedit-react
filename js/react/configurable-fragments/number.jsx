import React from 'react';
export class NumberFragment extends React.Component {
  render() {
    return (
        <div className="form-group">
            <label className="control-label col-sm-3">
                {this.props.field.name}:
            </label>
            <div className="col-sm-9">
                <input className="form-control" type="number" />
            </div>
        </div>
        );
  }
} 