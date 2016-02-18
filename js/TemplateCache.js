(function(){
  "use strict";
  class TemplateCache {
    constructor(){
      this.cache = {};
      this.entries = {
        trigger:[],
        reward:[]
      };
    }

    generate(prefix,entry){
      this.entries[prefix].push({t: entry.type, n:entry.name});
      //console.log("Generating", entry.type, entry);
      this.cache[prefix + '.' + entry.type] = `<h3>${entry.name}<button id="close">&times;</button></h3>` + entry.fields.map((field)=>{
        switch(field.type){
          case "text":
          return `<div class="input-group col-md-6">
          <label class="input-group-addon">${field.name}</label>
          <input class="form-control" type="text" data-key="${field.key}"/>
          </div>`;
          case "bool":
          return `<div class="input-group col-md-6">
          <label class="input-group-addon">${field.name}</label>
          <input type="checkbox" data-key="${field.key}"/>
          </div>`;
          case "location":
          return `<h4>${field.name}</h4>
          <div class="input-group col-md-6">
          <span class="input-group-addon">World</span><input class="form-control" type="text" data-key="${field.key}.world"/>
          </div>
          <div class="input-group col-md-6">
  <span class="input-group-addon">X</span><input class="form-control" type="number" data-key="${field.key}.x" int-fix//>
  <span class="input-group-addon">Y</span><input class="form-control" type="number" data-key="${field.key}.y" int-fix//>
  <span class="input-group-addon">Z</span><input class="form-control" type="number" data-key="${field.key}.z" int-fix//>
  </div>`;
  case "cuboid":
  return `cuboid`;
  case "selection":
  return `selection`;
  case "trigger":
  return `
  <label class="input-group-addon">${field.name}</label>
  <ach-configurable-list type="trigger" data-key="${field.key}"></ach-configurable-list>`;
  case "number":
  return `<div class="input-group col-md-6">
          <label class="input-group-addon">${field.name}</label>
          <input class="form-control" type="number" data-key="${field.key}" ${field.min!==false ? 'min="' + field.min + '"' : ''} ${field.max!==false ? 'max="' + field.max + '"' : ''}  step="1"/>
          </div>`;
  case "default":
  return `default`;

}
}).join("\n");
}
get(key){
  return this.cache[key];
}
}
window.TemplateCache = new TemplateCache();
})()