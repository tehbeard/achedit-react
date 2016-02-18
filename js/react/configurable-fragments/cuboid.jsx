import React from 'react';
import {Coords} from './coords.jsx';
export class CuboidFragment extends React.Component {
  render() {
      console.log("COORDS",Coords);
    return (
        <div className="frag-cuboid">
            <div className="form-group">
                <label className="control-label col-sm-3" >
                    World:
                </label>
                <div className="col-sm-9">
                    <input className="form-control" type="text"/>
                </div>
            </div>
            <Coords />
            <Coords />
        </div>
        
        );
  }
} 