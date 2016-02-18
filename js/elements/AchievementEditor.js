(function(){
    "use strict";
/**
* Models an achievement
*/
class AchievementEditor extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        this.achievements = [{
                slug:"slug",
                name:"ach",
                descrip:"",
                triggers:[],
                rewards:[],
            broadcast: "BROADCAST", //BROADCAST, PERSON, NONE
            hidden: false,

        }];
        this.root = this.createShadowRoot();
        this.root.innerHTML = `
        <style>
        @import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
        .load-area{
            border: 1px dashed black;
        }
        </style>
        <div class="row">
        <div class="col-xs-6 load-area">
        <input type="file" id="load"/>
        </div>
        <div class="col-xs-6">
            <button class="btn btn-primary" id="save">Save</button>
        </div>
        </div>
        <div class="row">
        <div class="col-md-5">
        <button id="save-ach" class="btn btn-success">Save Achievement</button>
        <ach-achievement></ach-achievement>
        </div>
        <div class="col-md-7">
        <ach-achievement-list></ach-achievement-list>
        <button class="btn btn-primary" id="add-new">New Achievement</button>
        </div>
        </div>
        `;
        var newButton = this.root.querySelector("#add-new");
        var achList = this.root.querySelector("ach-achievement-list");
        var ach = this.root.querySelector("ach-achievement");
        var loadFileInput = this.root.querySelector("#load");
        var saveButton = this.root.querySelector("#save");
        var saveAch = this.root.querySelector("#save-ach");
        var loadArea = this.root.querySelector(".load-area");

        newButton.addEventListener("click", (e)=>{
            achList.pushItem({
                slug:"slug",
                name:"ach",
                descrip:"",
                triggers:[],
                rewards:[],
                broadcast: "BROADCAST", //BROADCAST, PERSON, NONE
                hidden: false,
            });
        });
        loadFileInput.addEventListener("change",()=>{
                if(loadFileInput.files.length > 0){
                    this.loadFile(loadFileInput.files[0])
                }
            });
        saveButton.addEventListener("click",()=>{
            var aa = document.createElement("a")
            aa.href = URL.createObjectURL(new Blob([JSON.stringify(achList.getItems(), null, 2)]));
            aa.download = "ach.json";
            aa.click();
        });
        loadArea.addEventListener("drop",(e)=>{
            if(!e.target.matches("#load")){
                e.preventDefault();
                this.loadFile(e.dataTransfer.files[0]);
            }
        });
        var index = -1;
        achList.addEventListener("ach.edit",(e)=>{
            console.log(e.detail);
            ach.setAchievement(e.detail.ach);
            index = e.detail.rowId;
        });
        saveAch.addEventListener("click", ()=>{
            achList.setItem(index, ach.getAchievement());
        });

    };
    // Fires when an instance was inserted into the document.
    attachedCallback() {};
    // Fires when an instance was removed from the document.
    detachedCallback() {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {

    };

    loadFile(file){
       var fr = new FileReader();
       fr.onload = ()=>{
          this.root.querySelector("ach-achievement-list").setItems(JSON.parse(fr.result));
      }
      fr.readAsText(file);
    }
}
document.registerElement('ach-achievement-editor', AchievementEditor);
window.Achievement = Achievement;
})()