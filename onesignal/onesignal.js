var https = require('https');

module.exports = function(RED) {
    function OneSignalNode(config) {
        console.log("CONFIG: ", config)
        RED.nodes.createNode(this,config);
        var oneSignalConfig = RED.nodes.getNode(config.config);

        var node = this;
        var headers = {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": "Basic " + oneSignalConfig.restApiKey
        };
        
        var options = {
          host: "onesignal.com",
          port: 443,
          path: "/api/v1/notifications",
          method: "POST",
          headers: headers
        };
      
        this.on('input', function(msg) {
          //msg.payload = msg.payload.toLowerCase();
          //node.send(msg);
          var req = https.request(options, function(res) {  
            res.on('data', function(data) {
              var response = JSON.parse(data);
              if(response.errors) {
                response.errors.forEach(function(err){node.error(err);})
                node.status({fill:"red",shape:"ring",text:"OneSignal ERROR"});
              } else {
                node.log("Notification SENT SUCCESSFULLY");
                node.status({fill:"green",shape:"ring",text:"SENT!"});
              }
              //orignalRes.send(JSON.stringify(response))
            });

            req.on('error', function(e) {
              console.log("ERROR:", e);
              node.error(e)
              node.status({fill:"red",shape:"ring",text:"OneSignal ERROR"});
            });
          });
          
          
          
          var text = msg.payload.message || config.defaultMessage;
          var title = msg.payload.title || config.defaultTitle;

          var messageJson = { 
            app_id: oneSignalConfig.appId,
            contents: {"en": text},
            headings: {"en": title},
            included_segments: ["All"]
          };

          req.write(JSON.stringify(messageJson));
          req.end();
        });
    }
    RED.nodes.registerType("onesignal",OneSignalNode);
}