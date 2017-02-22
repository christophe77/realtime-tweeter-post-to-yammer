# realtime-tweeter-post-to-yammer
using twitter streaming api to watch for a keyword and post all tweets to a yammer group.

Initialize the folder with "npm install" then 

1) Create a twitter dev account and a new app
2) Create a yammer dev account and a new app
3) Edit rtty.js :
	- put your twitter and yammer api informations
	- put the groupID of the yammer group you want the tweets to be posted in
	- put the keyword you want to watch on twitter
4) node rtty.js
