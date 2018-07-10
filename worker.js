/*jslint node: true */
"use strict";

const eventBus = require("byteballcore/event_bus.js");
const headlessWallet = require("headless-byteball");
const config = require("byteballcore/conf.js");
const cluster = require("byteball-cluster");
require("byteballcore/wallet.js");

const worker = cluster.Worker;

eventBus.once("headless_wallet_ready", function() {
    headlessWallet.setupChatEventHandlers();

    worker.join(config.coordinatorPairingCode, (err, coordinator) => {
        if (err) return Error(err);
        console.error("Joined computing cluster " + coordinator);
    });
});

eventBus.on("text", worker.listen);

worker.on("sum", (coordinator, message, callback) => {
    let a = Number.parseInt(message.a, 10);
    let b = Number.parseInt(message.b, 10);

    callback(null, {
        result: a + b
    });
});
