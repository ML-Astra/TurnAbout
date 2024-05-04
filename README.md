
# TurnAbout
## Tournament Data Server For All

TurnAbout is a tournament data server built as an API that can be customised as much as you wish.
Using TurnAbout you can create your own graphical front end to create, store, update, and display match data.

## Deployment

To deploy and run this project, follow these instructions


#### Git Clone
```bash
  git clone https://github.com/ML-Astra/TurnAbout.git
```
#### Install Required Modules
```bash
    npm i
```
#### Start TurnAbout Server
```bash
    npm start
```
#### Access API Explorer
To access the API Explorer go to the IP/Hostname of the system running it on port 3000.
Give it a quick test by running the /hb API endpoint.

## API Reference
Warning!!! Subject to Change as the project develops.

#### Create New Match

```http
  POST /new-tournament/{status}-{name}-{teams}-{scores}
```
The Curley Brackes { } aren't required but the dashes - are.
| Parameter | Type     | Description (All Required) |
| :-------- | :------- | :------------------------- |
| `status`  | `string` | Current Status of the match (e.g: In progress, Win(Team)) |
| `name`    | `string` | Name of the match, this is used to pull the match file later.|
| `teams`   | `string` | The names of your two teams (e.g: Team A vs. Team B)|
| `scores`  | `string` | Scores for the match (e.g: 0 - 4)|

#### Get Match

```http
  GET /game/{game}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. The name of the match file. |

#### Delete Match

```http
  DEL /game/{game}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. The name of the match file. |

#### HeartBeat

```http
    GET /hb
```
HeartBeat is meant to ensure you have a connection to the TurnAbout server instance to make changes.


## To be done

- Redo the Create pathway to split team names and scores

- Add intergrations for certain games like League of Legends, Apex Legends, etc.

- Add/Fix update pathway to allow modification of exsisting game files.


## Authors
- Astralis Lewis
    - [@ML-Astra](https://www.github.com/ML-Astra)
    - [Twitch](https://www.twitch.tv/ML_Astra)

