# achedit-react
Experimenting with react/redux to make a new version of the BeardAch Achievement Editor. 
As with anything react/webpack related `npm install && webpack` 

I also included the web component based variant in an orphaned branch (alt/web-component)

Impressions so far:
* Love JSX, makes writing components so much easier.
* redux is interesting, I think it may be overkill for this project, but in situations where there are multiple providers of data (UI/client, web socket etc) I can see the true potential shining through over other methods.
* Someway to compile JSX to vanilla web components would be amazing for projects that don't need virtualDOM and other stuff.
