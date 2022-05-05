const responseFactory = () => ({
  _status: null,
  _send: null,
  status(code) {
    this._status = code;
    return this;
  },
  send(send) {
    this._send = send;
    return this;
  },
});

module.exports = { responseFactory };
