# Animu Crawling System

## System's features

1. Looking for new animu videos from rss
2. Auto clone animu videos via torrent
3. Media serve on browser

## System's struct

```bash
.
├── README.md
├── dummy_files
├── pacman
├── logs
├── resources
├── scripts
├── server   
└── media
```

1. `pacman`       => rss listener, config rss list on resources/feeds.json
2. `logs`         => rss listener's log
3. `resources`    => store rss list
4. `scripts`      => system's scripts (such as download script)
5. `server`       => media server
6. `media`        => store videos
7. `dummy_files`  => store *

## How to run

### Require packages

#### For `pacman` rss listener

This service performed by python2.7 using libs:

1. requests (install via `pip`)
2. python-bs4 (install via package manger, such as `apt`)
3. logging (install via `pip`)

Install python libs via old version of `pip` may harm security problems. Please update your `pip` to newest version to avoid that kind of errors.

#### For `server` media

This service performed by node js. Just run `npm install` on the first time run this project for installing dependencies packages.

For using `npm start` command, please install [nodemon](https://www.npmjs.com/package/nodemon) package globally to your host.

#### For `scripts` download videos via torrent

Install `aria2` package via your package manager such as `apt`. More informations go [here](https://aria2.github.io/)

### Add new rss

Rss list stored at `resources/feeds.json`.

Sample config:

```json
{
    "title": "FEED LIST",
    "data": [
        {
            "team": "fuyu",
            "rss": "https://www.fuyufs.com/episode/feed",
            "anchor": {
                "tag": "a",
                "css_selector": {"data-key":"quality_720p_torrent"}
            }
        },
        {
            "team": "HorribleSubs",
            "rss": "https://nyaa.si/?page=rss&u=HorribleSubs",
            "anchor": false
        }
    ]
}
```

For each rss, if `link` field from `xml` code not contain url for .torrent file, you must specific `anchor` field on rss config to point at tag that have .torrent file download link.

### Run system

Run 3 services one by one

> Pacman service - RSS listener

```bash
$ cd pacman
$ python main.py
```

>  Media service

If you installed `nodemon`

```bash
$ cd server
$ npm start
```

else

```bash
$ cd server
$ node app.js
```

> Monitoring service (optional)

```bash
$ cd scripts
$ watch -n 10 "./status.sh"
```

### Endpoint list

With `xxx.yyy` is your host

> http://xxx.yyy:3000/

=> Greeting endpoint

> http://xxx.yyy:3000/videos

=> Cloned videos list

> http://xxx.yyy:3000/logs

=> Crawling service log

> http://xxx.yyy:3000/monitor

=> Crawling system status (for checking hard disk capacity)
