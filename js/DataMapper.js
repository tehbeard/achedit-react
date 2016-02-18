"use strict";

class DataMapper{
    constructor(node, delim){
        this.node = node;
        this.delim = delim || ".";
    }

    nodes(){
        return [].slice.call(this.node.querySelectorAll("[data-key]"));
    }

    to(data){
        this.nodes().forEach((node)=>{
            if(node.matches("ach-configurable-list")){
                node.setItems(this.walk(data, node.dataset.key) || []);
            }else{
                node.setAttribute( node.matches("[type=checkbox]") ? "checked":"value",this.walk(data, node.dataset.key)|| node.getAttribute( node.matches("[type=checkbox]") ? "checked":"value")||"" );
            }
        });
    }

    from(data){
        this.nodes().forEach((node)=>{
            if(node.matches("ach-configurable-list")){
                this.walk(data, node.dataset.key, node.getItems());
            }else{
                this.walk(data, node.dataset.key, node.matches("[type=checkbox]") ? node.checked : node.value);
            }   
        });
        return data;
    }

    walk(obj, path, val){
        var parts = path.split(this.delim);
        var ctx = obj;
        var k = (typeof val !== "undefined" ) ? parts.pop() : null;
        parts.forEach((e) => ctx = ctx[e]);
        if(k){
            ctx[k] = val;
        }
        return ctx;
    }
}