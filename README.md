# Song List
- 2021.06 ~ 2021.06
- 202112714 김수진

---

## 목차

[설명](#설명)

[API 설계문서 전체보기](#api-설계-문서-전체보기)

[song 상세보기](#song-상세보기)

[album 상세보기](#album-상세보기)

[artist 상세보기](#artist-상세보기)

[database 설계 문서](#database-설계-문서)


<br><br>
---
# 설명
[목차로 가기](#목차)

## Description

song / album / artist - CRUD   음악목록사이트

## Main URL (AWS)

```
http://13.125.247.197:3000/song
http://13.125.247.197:3000/album
http://13.125.247.197:3000/artist
```

## Installation

```bash
$ npm install
```

## Running the app (local server)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<br><br>
---
# api 설계 문서 전체보기
[목차로 가기](#목차)

## 🎵 song / 음악 곡

| Method | URL                  | 설명             | CURD   |
| ------ | -------------------- | ---------------- | ------ |
| GET    | /song/read           | song 곡 전체보기 | Read   |
| GET    | /song/read/song_id   | song 곡 하나보기 | Read   |
| POST   | /song/create         | song 곡 생성하기 | Create |
| PUT    | /song/update         | song 곡 수정하기 | Update |
| DELETE | /song/delete/song_id | song 곡 삭제하기 | Delete |
<br>

## 💿 album/ 앨범

| Method | URL                    | 설명                 | CURD   |
| ------ | ---------------------- | -------------------- | ------ |
| GET    | /album/read            | album 앨범 전체보기  | Read   |
| GET    | /album/read/album_id   | album 앨범별 곡 보기 | Read   |
| POST   | /album/create          | album 앨범 생성하기  | Create |
| PUT    | /album/update          | album 앨범 수정하기  | Update |
| DELETE | /album/delete/album_id | album 앨범 삭제하기  | Delete |
<br>

## 🎙 artist/ 앨범

| Method | URL                      | 설명                      | CURD   |
| ------ | ------------------------ | ------------------------- | ------ |
| GET    | /artist/read             | artist 아티스트 전체보기  | Read   |
| GET    | /artist/read/artist_id   | artist 아티스트별 곡 보기 | Read   |
| POST   | /artist/create           | artist 아티스트 생성하기  | Create |
| PUT    | /artist/update           | artist 아티스트 수정하기  | Update |
| DELETE | /artist/delete/artist_id | artist 아티스트 삭제하기  | Delete |
<br>

<br>
---
# song 상세보기
[목차로 가기](#목차)

### 🎶 곡 전체보기

| 요청       |            |
| ---------- | ---------- |
| URL        | /song/read |
| 예시       | /song/read |
| 요청메소드 | GET        |

##### 응답메시지

```javascript
[
    {
        "id": 1,
        "title": "Life Goes On",
        "genre": "랩/힙합",
        "relDate": "2020-11-20T00:00:00.000Z",
        "albumTitle": "BE",						//album 테이블의 title
        "artistName": "방탄소년단"				 //artist 테이블의 name
    },
    {
        "id": 3,
        "title": "내 방을 여행하는 법",
        "genre": "R&B/Soul",
        "relDate": "2020-11-20T00:00:00.000Z",
        "albumTitle": "BE",
        "artistName": "방탄소년단"
    },
    ...
```
<br>

---
### 🎵 곡 하나보기 
| 요청       |                    |
| ---------- | ------------------ |
| URL        | /song/read/sond_id |
| 예시       | /song/read/1       |
| 요청메소드 | GET                |

##### 응답메시지

```javascript
{
    "id": 1,
    "album_id": 1,
    "artist_id": 1,
    "title": "Life Goes On",
    "genre": "랩/힙합",
    "relDate": "2020-11-20T00:00:00.000Z",
    "album.id": 1,					//확인을 위해 album 테이블의 id와 title만 추출
    "album.title": "BE",
    "artist.id": 1,					//확인을 위해 artist 테이블의 id와 name만 추출
    "artist.name": "방탄소년단"
}
```
<br>

---
### 🎵 곡 생성하기
| 요청       |              |
| ---------- | ------------ |
| URL        | /song/create |
| 예시       | /song/create |
| 요청메소드 | POST         |

##### 요청메시지
```javascript
{
    "album_id": "1",
    "artist_id": "1",
    "title": "Life goes on",
    "genre": "힙합",
    "relDate": "2021-06-02"
}
```
<br>

---
### 🎵 곡 수정하기
| 요청       |              |
| ---------- | ------------ |
| URL        | /song/update |
| 예시       | /song/update |
| 요청메소드 | PUT          |
##### 요청메시지
```javascript
{
    "id": "5",
    "album_id": "3",
    "artist_id": "2",
    "title": "시간의 바깥",
    "genre": "록/메탈",
    "relDate": "2019-11-18"
}
```
<br>

---
### 🎵 곡 삭제하기
| 요청       |                      |
| ---------- | -------------------- |
| URL        | /song/delete/song_id |
| 예시       | /song/delete/5       |
| 요청메소드 | DELETE               |

<br><br>

---
# album 상세보기
[목차로 가기](#목차)

## 💿 앨범 전체보기

| 요청       |             |
| ---------- | ----------- |
| URL        | /album/read |
| 예시       | /album/read |
| 요청메소드 | GET         |

##### 응답메시지

```javascript
[
    {
        "id": 1,
        "title": "BE"
    },
    {
        "id": 3,
        "title": "Love Poem"
    },
    ...
]
```

<br>

---
## 💿 앨범별 곡 보기 
| 요청       |                      |
| ---------- | -------------------- |
| URL        | /album/read/album_id |
| 예시       | /album/read/1        |
| 요청메소드 | GET                  |

##### 응답메시지

```javascript
[
    {
        "id": 1,
        "title": "BE",
        "songs.id": 1,
        "songs.album_id": 1,
        "songs.artist_id": 1,
        "songs.title": "Life Goes On",			//album id:1인 앨범의 곡 제목1
        "songs.genre": "랩/힙합",
        "songs.relDate": "2020-11-20T00:00:00.000Z"
    },
    {
        "id": 1,
        "title": "BE",
        "songs.id": 3,
        "songs.album_id": 1,
        "songs.artist_id": 1,
        "songs.title": "내 방을 여행하는 법",	  //album id:1인 앨범의 곡 제목2
        "songs.genre": "R&B/Soul",
        "songs.relDate": "2020-11-20T00:00:00.000Z"
    },
    ...
]
```

<br>

---
## 💿 앨범 생성하기
| 요청       |               |
| ---------- | ------------- |
| URL        | /album/create |
| 예시       | /album/create |
| 요청메소드 | POST          |

##### 요청메시지
```javascript
{
    "title": "NO"
}
```
<br>

---
## 💿 앨범 수정하기
| 요청       |               |
| ---------- | ------------- |
| URL        | /album/update |
| 예시       | /album/update |
| 요청메소드 | PUT           |
##### 요청메시지
```javascript
{
    "id": "3",
    "title": "Love Poem"
}
```
<br>

---
## 💿 앨범 삭제하기
| 요청       |                        |
| ---------- | ---------------------- |
| URL        | /album/delete/album_id |
| 예시       | /album/delete/5        |
| 요청메소드 | DELETE                 |

---
<br>
<br>

---
# artist 상세보기
[목차로 가기](#목차)

## 🎙 아티스트 전체보기

| 요청       |             |
| ---------- | ----------- |
| URL        | /artist/read |
| 예시       | /artist/read |
| 요청메소드 | GET         |

##### 응답메시지

```javascript
[
    {
        "id": 1,
        "name": "방탄소년단"
    },
    {
        "id": 2,
        "name": "아이유"
    },
    ...
```
<br>

---
## 🎙 아티스트별 곡 보기 
| 요청       |                      |
| ---------- | -------------------- |
| URL        | /artist/read/artist_id |
| 예시       | /artist/read/1        |
| 요청메소드 | GET                  |

##### 응답메시지

```javascript
[
    {
        "id": 1,
        "name": "방탄소년단",
        "songs.id": 1,
        "songs.album_id": 1,
        "songs.artist_id": 1,
        "songs.title": "Life Goes On",				 //artist id:1인 앨범의 곡 제목1
        "songs.genre": "랩/힙합",
        "songs.relDate": "2020-11-20T00:00:00.000Z"
    },
    {
        "id": 1,
        "name": "방탄소년단",
        "songs.id": 3,
        "songs.album_id": 1,
        "songs.artist_id": 1,
        "songs.title": "내 방을 여행하는 법",			//artist id:1인 앨범의 곡 제목2
        "songs.genre": "R&B/Soul",
        "songs.relDate": "2020-11-20T00:00:00.000Z"
    },
    ...
]
```
<br>

---
## 🎙 아티스트 생성하기
| 요청       |               |
| ---------- | ------------- |
| URL        | /artist/create |
| 예시       | /artist/create |
| 요청메소드 | POST          |

##### 요청메시지
```javascript
{
    "name": "아이유"
}
```
<br>

---
## 🎙 아티스트 수정하기
| 요청       |               |
| ---------- | ------------- |
| URL        | /artist/update |
| 예시       | /artist/update |
| 요청메소드 | PUT           |
##### 요청메시지
```javascript
{
    "id": "3",
    "name": "샤이니"
}
```
<br>

---
## 🎙 아티스트 삭제하기
| 요청       |                        |
| ---------- | ---------------------- |
| URL        | /artist/delete/artist_id |
| 예시       | /artist/delete/5        |
| 요청메소드 | DELETE                 |

---

<br><br>

# database 설계 문서
[목차로 가기](#목차)

Table : song, album, artist 

- 테이블 생성시 자동으로 테이블명 뒤에 s가 붙는다.
- createdAt과 updatedAt은 자동으로 생긴다.

<br>

---
## **Table: song / 곡**

| PK   | AI   | FK   | Default | Name      | description          | Type         |
| ---- | ---- | ---- | ------- | --------- | -------------------- | ------------ |
| v    | v    |      |         | id        | 일련번호             | int(11)      |
|      |      | v    | 1       | album_id  | 앨범번호(외래키)     | int(11)      |
|      |      | v    | 1       | artist_id | 아티스트번호(외래키) | int(11)      |
|      |      |      | NULL    | title     | 곡 제목              | varchar(100) |
|      |      |      | NULL    | genre     | 장르                 | varchar(50)  |
|      |      |      | NULL    | relDate   | 발매일               | date         |

```
[
    {"id":"1","album_id":"1","artist_id":"1","title":"Life Goes On","genre":"랩/힙합","relDate":"2020-11-20"},
	
	{"id":"2","album_id":"1","artist_id":"1","title":"내 방을 여행하는 법","genre":"R&B/Soul","relDate":"2020-11-20"},
	
	{"id":"3","album_id":"2","artist_id":"2","title":"시간의 바깥","genre":"록/메탈","relDate":"2019-11-18"},
	
	...
```

<br>

---
## **Table: album / 앨범**

| PK   | AI   | FK   | Default | Name  | description   | Type         |
| ---- | ---- | ---- | ------- | ----- | ------------- | ------------ |
| v    | v    |      |         | id    | 앨범 일련번호 | int(11)      |
|      |      |      | NULL    | title | 앨범 타이틀   | varchar(100) |

```
[
	{"id":"1","title":"BE"},
	{"id":"2","title":"Love poem"},
	...
```

<br>

---
## **Table: artist / 아티스트**

| PK   | AI   | FK   | Default | Name | description       | Type         |
| ---- | ---- | ---- | ------- | ---- | ----------------- | ------------ |
| v    | v    |      |         | id   | 아티스트 일련번호 | int(11)      |
|      |      |      | NULL    | name | 아티스트 이름     | varchar(100) |

```
[
	{"id":"1","name":"방탄소년단"},
	{"id":"2","name":"아이유"},
	...
```

