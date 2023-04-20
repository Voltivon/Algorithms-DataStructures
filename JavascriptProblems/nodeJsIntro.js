const { Buffer } =  require('node:buffer');

String.prototype.toBase64 = function() {
    return Buffer.from(this).toString("base64");
}

String.prototype.fromBase64 = function() {
    return Buffer.from(this, 'base64').toString("utf-8");
}
