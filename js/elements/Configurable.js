(function(){
"use strict";
/**
* Models a configurable chunk of json mapped to a form.
*/
class Configurable extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        this.root = this.createShadowRoot();
        this.mapper = new DataMapper(this.root);
        this.root.addEventListener("click",(ev)=>{
            if(ev.target.matches("#close")){
                this.remove();
            }
        });
    };
    // Fires when an instance was inserted into the document.
    attachedCallback() {
        this.root.innerHTML = '<style>@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");</style>\n' + TemplateCache.get(this.getAttribute("type")); //Grab template from cache
    };
    // Fires when an instance was removed from the document.
    detachedCallback() {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr == "type"){
            this.root.innerHTML = TemplateCache.get(newVal); //Grab template from cache
        }
    };

    getConf(){
        var data = this.mapper.from({_type: this.getAttribute("type").split(".")[1]});
        return data;
    };

    setConf(data){
        this.mapper.to(data);
    };
}
document.registerElement('ach-configurable', Configurable);
window.Configurable = Configurable;
})()