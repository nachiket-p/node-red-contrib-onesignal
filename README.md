# node-red-contrib-onesignal

##  Node-RED node for push notifications.  
A node for sending push notifications using OneSignal. It currently supports subset of the OneSignal features.  
Right now, It allows to send notification on following platform: 
* WEB
* ANDROID
* iOS  

## Node Configuration  
***OneSignal App Id***  
Configure OneSignal app id and Rest api key.   

***Title***  
It containes title of push notification.  
You can add title from `msg.payload.title` or can type manually.   

***Message***  
It containes body content of message.  
You can add message content from `msg.payload.content` or can type manually.  

***Platform***  
To only send to specific platform, you may check only that platform.  
Don't check any platform to send all platform.  

***Target***  
Select target user whom you wants to send notification.  
* Segment  
You simply specify which segments you want to send to.  
* PlayerIds  
You can add playerId(array of string) from `msg.payload.playerId` or can type manulally.



#### TODO: 
1. Add Channel Filters
2. Add Device Type Filters
3. Allow to sent to set of specific users
4. Add Scheduling Options Filter
5. Add custom filter options

