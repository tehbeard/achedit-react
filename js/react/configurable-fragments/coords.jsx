import React from 'react';
export class Coords extends React.Component {
  render() {
    return (<div className="form-group">
                <label className="control-label col-sm-3" >
                    Coords: 
                </label>
                <div className="col-sm-9">
                    <div className="input-group">
                        <span className="input-group-addon">X</span><input className="form-control" type="number" />
                        <span className="input-group-addon">Y</span><input className="form-control" type="number" />
                        <span className="input-group-addon">Z</span><input className="form-control" type="number" />
                    </div>
                </div>
            </div>)
  }
} 