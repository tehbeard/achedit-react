"use strict";
/**
* Models an achievement
*/
class ConfigurableList extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        this.root = this.createShadowRoot();
        this.root.innerHTML = `
<style>@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");</style>
<div class="fluid-container">
<form id="newType" class="row">
<div class="col-xs-9"><select class="form-control" name="type"></select></div>
<div class="col-xs-3"><button class="form-control btn btn-primary btn-block" type="button" id="add">Add</button></div>
</form>
<div id="items" class="row" style="border:1px dashed black;min-height:20px;padding-left:15px">
</div>
</div>`; //Setup basic elements
        this.root.querySelector("[name=type]").innerHTML = TemplateCache.entries[this.getAttribute("type")].map((e)=>`<option value="${e.t}">${e.n}</option>`).join("");
        this.root.querySelector("#add").addEventListener("click",()=>{
            var c = document.createElement("ach-configurable");
            c.setAttribute("type", this.getAttribute("type") + "." + this.root.querySelector("[name=type]").value);
            this.root.querySelector("#items").appendChild(c);
        });
    };
    // Fires when an instance was inserted into the document.
    attachedCallback() {};
    // Fires when an instance was removed from the document.
    detachedCallback() {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {};

    getItems(){
        return [].slice.call(this.root.querySelectorAll("ach-configurable")).map((e)=>e.getConf())
    };

    setItems(items){
        var node = this.root.querySelector("#items");
        while(node.firstChild) {
            node.removeChild(node.firstChild);
        }
        items.forEach((t)=>{
            var c = document.createElement("ach-configurable");
            c.setAttribute("type", this.getAttribute("type") + "." + t._type);
            node.appendChild(c);
            c.setConf(t);
        });
    }
}
document.registerElement('ach-configurable-list', ConfigurableList);