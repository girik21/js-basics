const express = require('express');

const getDevice = express.Router();

getDevice.get('/', (req, res) => {
    const device = req.header('User-Agent');
    let deviceInfo = {};

    if (device.includes('Windows')) {
        deviceInfo.isWindows = true;
    } else {
        deviceInfo.isWindows = false;
    }

    if (device.includes('Macintosh') || device.includes('Mac OS X')) {
        deviceInfo.isMac = true;
    } else {
        deviceInfo.isMac = false;
    }

    if (device.includes('Linux')) {
        deviceInfo.isLinux = true;
    } else {
        deviceInfo.isLinux = false;
    }

    deviceInfo.postmanRunTime = device.includes('Postman');

    res.json(deviceInfo);
});

module.exports = getDevice;