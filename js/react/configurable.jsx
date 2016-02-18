import React from 'react';
import  * as Fragments from './configurable-fragments/index.js';
export class Configurable extends React.Component {
  render() {
    return <div className="configurable">
           {this._makeFragments()}
        </div>
  }
  
  _makeFragments(){
      var fields = _cache[this.props.data.type];
      return fields.map((field)=>{
          var Fragment = Fragments[field.type];
          console.log("FRAG",Fragments, field.type, Fragment);
          return <Fragment key={field.key} field={field} onChange={this.onChange.bind(this, field.name)}/>
      })
      

  }
  onChange(){
      
  }
}

var _cache = {};

export function cache(type, fields){
    console.log("CACHING", type, fields);
    _cache[type] = fields;
}