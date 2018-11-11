module.exports = function (RED) {
    "use strict";
    var translate = require('google-translate-api');

    function GoogleTranslateNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function (msg) {
            translate(msg.payload + '', { to: config.to }).then(function (res) {
                msg.payload = res.text;
                node.send(msg);
            }).catch(function (err) {
                node.error(err);
            });
        });
    }

    RED.nodes.registerType("google-translate", GoogleTranslateNode);
};
