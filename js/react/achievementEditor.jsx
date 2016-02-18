import React from 'react';
import Achievement from './achievement.jsx';
import AchievementList from './achievementList.jsx';
export default class AchievementEditor extends React.Component {
  render() {
      var testData = {type:"test"};
    return (<div className="fluid-container">
            <div className="row">
                <div className="col-xs-6 load-area">
                    <div className="input-group">
                            <span className="input-group-btn">
                                <span className="btn btn-primary btn-file">
                                    Browse&hellip; <input type="file" id="load" />
                                </span>
                            </span>
                            <input type="text" className="form-control" readonly />
                        </div>
                </div>
                <div className="col-xs-6">
                    <button className="btn btn-primary" id="save">Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <button id="save-ach" className="btn btn-success">Save Achievement</button>
                    <Achievement></Achievement>
                </div>
                <div className="col-md-4">
                    <AchievementList data={[{slug:"slug1",name:"name1"}, {slug:"slug2",name:"name2"}, {slug:"slug3",name:"name3"}]}/>
                    <button className="btn btn-primary" id="add-new">New Achievement</button>
                </div>
            </div>
        </div>)
  }
  
  onFileChange(ev){
      if(ev.target.files.length > 0){
        this.loadFile(ev.target.files[0]);
      }
  }
  
  onFileDrop(e){
      if(!e.target.matches("#load")){
                e.preventDefault();
                this.loadFile(e.dataTransfer.files[0]);
            }
  }
  
  loadFile(file){
       var fr = new FileReader();
       fr.onload = ()=>{
          this.root.querySelector("ach-achievement-list").setItems(JSON.parse(fr.result));
      }
      fr.readAsText(file);
    }
}

