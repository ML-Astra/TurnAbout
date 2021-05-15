// Uncomment these imports to begin using these cool features!

import {get, response, ResponseObject} from '@loopback/rest';
const fse = require('fs-extra');

const HB_RES: ResponseObject = {
  description: 'Heartbeat Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'HB RES',
        properties: {
          response: {type: 'string'},
          version: {type: 'string'},
          branch: {type: 'string'},
          author: {type: 'string'}
        },
      },
    },
  },
}

export class HeartbeatController {
  constructor() { }
  @get('/hb')
  @response(200, HB_RES)
  hb(): object {
    const sysinfo = fse.readJsonSync(`./dat/sysinfo.json`);
    return {
      response: 'OK',
      version: sysinfo.version,
      branch: sysinfo.branch,
      author: sysinfo.author
    }
  }
}
