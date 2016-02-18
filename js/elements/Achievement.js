(function(){
"use strict";
/**
* Models an achievement
*/
class Achievement extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        var _newAch = {
            slug:"",
            name:"",
            descrip:"",
            triggers:[],
            rewards:[],
            broadcast: "BROADCAST", //BROADCAST, PERSON, NONE
            hidden: false,
        };
        this.root = this.createShadowRoot();
        this.root.innerHTML = `
        <style>@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");</style>
        <form class="form-horizontal">
<div class="form-group"><label class="control-label col-sm-3" for="slug">Slug:</label><div class="col-sm-9"><input class="form-control" type="text" data-key="slug"/></div></div>
<div class="form-group"><label class="control-label col-sm-3" for="name">Name:</label><div class="col-sm-9"><input class="form-control" type="text" data-key="name"/></div></div>
<div class="form-group"><label class="control-label col-sm-3" for="desc">Description:</label><div class="col-sm-9"><input class="form-control" type="text" data-key="descrip"/></div></div>
<div class="form-group"><label class="control-label col-sm-3" for="hidden">Hidden:</label><div class="col-sm-9"><input class="form-control" type="checkbox" data-key="hidden"/></div></div>
<div class="form-group"><label class="control-label col-sm-3" for="broadcast">Broadcast to:</label><div class="col-sm-9"><select class="form-control" data-key="broadcast">
<option value="BROADCAST">All</option>
<option value="PERSON">Recepient only</option>
<option value="NONE">Nobody</option>
</select></div></div>
<h4>Triggers</h4>
<ach-configurable-list type="trigger"></ach-configurable-list>
<hr/>
<h4>Rewards</h4>
<ach-configurable-list type="reward"></ach-configurable-list>
</form>`; 
            this.mapper = new DataMapper(this.root);
            this.setAchievement(_newAch);
    };
    // Fires when an instance was inserted into the document.
    attachedCallback() {};
    // Fires when an instance was removed from the document.
    detachedCallback() {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {

    };

    getAchievement(){
        var data = this.mapper.from({});
        data.triggers = this.root.querySelector("ach-configurable-list[type=trigger]").getItems(); // TODO: map data
        data.rewards = this.root.querySelector("ach-configurable-list[type=reward]").getItems(); //TODO: map data
        return data;
    };

    setAchievement(achievement){
        this.mapper.to(achievement);
        //TODO pass parts to trigger and reward elements
    };
}
document.registerElement('ach-achievement', Achievement);
window.Achievement = Achievement;
})()