module.exports = function(RED) {
    function OneSignalConfigNode(n) {
        RED.nodes.createNode(this,n);
        this.name = n.name;
        this.appId = n.appId;
        this.restApiKey = n.restApiKey;
    }
    RED.nodes.registerType("onesignal-config",OneSignalConfigNode);
}