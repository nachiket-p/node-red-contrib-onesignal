# node-red-contrib-onesignal
<h3>
  Node-RED node for push notifications.
</h3>
<p>
    A node which is capable enough to send push notification on following platforms.
    <ul>
        <li>
            <b>WEB</b>
        </li>
        <li>
            <b>ANDROID</b>
        </li>
        <li>
            <b>iOS</b>
        </li>
    </ul>
</p>
<h2>Node Configuration</h2>
<div>
    <b>OneSignal App Id</b>
    <div> Configure OneSignal app id and Rest api key.</div></br>
</div>
<div>
    <b>Title</b>
    <div> It containes title of push notification. </br> You can add title from <code>msg.payload.title</code> or can type manually.</div></br>
</div>
<div>
    <b>Message</b>
    <div> It containes body content of message. </br> You can add message content from <code>msg.payload.content</code> or can type manually.</div></br>
</div>
<div>
    <b>Platform</b>
    <div> To only send to specific platform, you may check only that platform. </br> select at least one platform to send push notification.</div></br>
</div>
<div>
    <b>AddSegment</b>
    <div> you simply specify which segments you want to send to.</div>
</div>Ï

ToDo:
1. Add Channel Filters
2. Add Device Type Filters
3. Allow to sent to set of specific users
4. Add Scheduling Options Filter
5. Add custom filter options

