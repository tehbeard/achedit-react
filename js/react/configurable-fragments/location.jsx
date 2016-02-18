import React from 'react';
import {Coords} from './coords.jsx';
export class LocationFragment extends React.Component {
  render() {
      console.log("COORDS",Coords);
    return (
        <div className="frag-location">
            <div className="form-group">
                <label className="control-label col-sm-3" >
                    World:
                </label>
                <div className="col-sm-9">
                    <input className="form-control" type="text"/>
                </div>
            </div>
            <Coords />
          
        </div>
        
        );
  }
} 