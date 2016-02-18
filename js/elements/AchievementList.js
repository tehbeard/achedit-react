(function(){
"use strict";
/**
* Models an achievement
*/
class AchievementList extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        this.achievements = [];
        this.root = this.createShadowRoot();
        this.root.innerHTML = `
<form>
<input id="filter" value=""/>
</form>
<table class="table">
<thead>
<tr>
<th>Slug</th>
<th>Name</th>
<th>Desciption</th>
<th>Edit</th>
<th>Remove</th>
</tr>
</thead>
<tbody>
</tbody>
</table>`; 
        this.root.querySelector("tbody").addEventListener("click",(e)=>{
            if(e.target.matches(".remove")){
                var row = e.target.parentElement.parentElement;
                if(this.dispatchEvent(new CustomEvent('ach.remove', {detail:{rowId: row.dataset.id, ach: this.achievements[row.dataset.id]}}))){
                    row.remove();
                    this.achievements.splice(row.dataset.id, 1);
                }
            }
            if(e.target.matches(".edit")){
                var row = e.target.parentElement.parentElement;
                this.dispatchEvent(new CustomEvent('ach.edit', {detail:{rowId: row.dataset.id, ach: this.achievements[row.dataset.id]}}))
            }

        });
        this.root.querySelector("#filter").addEventListener("keyup",(e)=>{
            this.renderFilter();
        })
        
    };
    // Fires when an instance was inserted into the document.
    attachedCallback() {};
    // Fires when an instance was removed from the document.
    detachedCallback() {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {

    };

    getItems(){
        return this.achievements;
    }

    pushItem(ach){
        this.achievements.push(ach);
        this.render();
    }

    setItem(idx, item){
        console.log("setting",idx, item);
        this.achievements[idx] = item;
        this.render();
    }

    setItems(list){
        this.achievements = list;
        this.render();
    };
    render(){
        var node = this.root.querySelector("tbody");
        while(node.firstChild) {
            node.removeChild(node.firstChild);
        }
        this.achievements.forEach((e,i)=>{
            var tr = document.createElement("tr");
            tr.innerHTML = `
<td>${e.slug}</td>
<td>${e.name}</td>
<td>${e.descrip}</td>
<td><button class="edit">Edit</button</td>
<td><button class="remove">Remove</button</td>`;
            tr.dataset.id = i;
            tr.dataset.filter = [e.slug,e.name,e.descrip].join(" ").toLowerCase();
            node.appendChild(tr);
        });
        this.renderFilter();
    }
    renderFilter(){
        [].slice.call(this.root.querySelectorAll("tbody tr")).forEach((row)=>{
                row.style.display = (row.dataset.filter.indexOf(this.root.querySelector("#filter").value.toLowerCase()) == -1) ? 'none' : 'table-row';
            });
    }
}
document.registerElement('ach-achievement-list', AchievementList);
})()