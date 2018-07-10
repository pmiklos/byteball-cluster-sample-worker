/*jslint node: true */
"use strict";

exports.coordinatorPairingCode = '<pairing_code_of_coordinator>';

exports.bServeAsHub = false;
exports.bLight = true;

exports.storage = 'sqlite';

exports.hub = 'byteball.org/bb-test';
exports.deviceName = 'Sample Worker';
exports.permanent_pairing_secret = '0000';
exports.KEYS_FILENAME = 'keys.json';

console.log('finished headless conf');
