/*
File: Tournaments Controllers
Purpose: Create, Update, Retrieve and Delete Tournaments.
Author: AST [ASTRA]
Project:Astra - Codename:CourtRoom
*/
import {inject} from '@loopback/core';
import {del, get, param, post, Request, response, ResponseObject, RestBindings} from '@loopback/rest';
const fse = require('fs-extra');
//const jp = require('jsonpath');

const CREATE: ResponseObject = {
  description: 'Create Tournament',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Tournament > Create',
        properties: {
          date: {type: 'string'},
          url: {type: 'string'},
          status: {type: 'string'},
          name: {type: 'string'},
          teams: {type: 'string'},
          scores: {type: 'string'}
        }
      }
    }
  }
}

const GET_GAME: ResponseObject = {
  description: 'Get Tournament',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Tournament > Get',
        properties: {
          date: {type: 'string'},
          url: {type: 'string'},
          status: {type: 'string'},
          name: {type: 'string'},
          teams: {type: 'string'},
          scores: {type: 'string'}
        }
      }
    }
  }
}

const DELETE_GAME: ResponseObject = {
  description: 'Delete Tournament',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'Tournament > Delete',
        properties: {
          status: {type: 'string'}
        }
      }
    }
  }
}

// class TournamentObject {
//   status: string;
//   name: string;
//   teams: string;
//   scores: string;

//   constructor(status: string, name: string, teams: string, scores: string) {
//     this.status = status;
//     this.name = name;
//     this.teams = teams;
//     this.scores = scores;
//   }
// }


export class TournamentsController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  @post('/new-tournament/{status}-{name}-{teams}-{scores}')
  @response(200, CREATE)
  createTournament(
    @param.path.string('status') status: string,
    @param.path.string('name') name: string,
    @param.path.string('teams') teams: string,
    @param.path.string('scores') scores: string,
    //@requestBody({description: 'Tournament Object'}) obj: TournamentObject
  ): object {
    const output = {
      date: new Date(),
      url: this.req.url,
      name: name,
      teams: teams,
      status: status,
      scores: scores
    }
    fse.outputJsonSync(`./games/${name}.json`, output);
    return {
      date: new Date(),
      url: this.req.url,
      name: name,
      teams: teams,
      status: status,
      scores: scores
    }
  }

  @get('/game/{game}')
  @response(200, GET_GAME)
  getTournament(
    @param.path.string('game') game: string
  ): object {
    const output = fse.readJsonSync(`./games/${game}.json`)
    return {
      date: new Date(),
      url: this.req.url,
      name: output.name,
      teams: output.teams,
      status: output.status,
      scores: output.scores
    }
  }

  @del('/game/{game}')
  @response(200, DELETE_GAME)
  delTournament(
    @param.path.string('game') game: string
  ): object {
    let status: string;
    if (fse.pathExistsSync(`./games/${game}.json`)) {
      fse.removeSync(`./games/${game}.json`);
      status = 'Game File Deleted!';
    } else {
      status = 'Game File Does NOT exist.';
    }


    return {status: status}
  }

}
