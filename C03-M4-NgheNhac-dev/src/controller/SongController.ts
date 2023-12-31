import songService from "../service/SongService";

class SongController {
    add = async (req, res) => {
        let data = await songService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await songService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await songService.delete(req.params.id);
        res.json(data)
    }
    findAllById = async (req,res) => {
        let {id, idPlaylist, idAlbum, idUser} = req.query
        if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser == undefined){
            let data = await songService.findAll();
            res.json(data)
        } else if (idPlaylist != undefined && id == undefined && idAlbum == undefined && idUser == undefined){
            let data = await songService.findAllByPlaylistId(idPlaylist)
            res.json(data)
        } else if (idPlaylist == undefined && id != undefined && idAlbum == undefined && idUser == undefined) {
            let data = await songService.findById(id)
            res.json(data)
        } else if (idPlaylist != undefined && id != undefined && idAlbum == undefined && idUser == undefined){
            if (id == 0){
                let data = await songService.findNotInPlaylistId(Number(idPlaylist), Number(id))
                res.json(data)
            } else {
                let data = await songService.findOneByPlaylistId(Number(idPlaylist), Number(id))
                res.json(data)
            }

        } else if (idPlaylist == undefined && id == undefined && idAlbum != undefined && idUser == undefined){
            let data = await songService.findAllByAlbumId(idAlbum)
            res.json(data)
        } else if (idPlaylist == undefined && id != undefined && idAlbum != undefined && idUser == undefined){
            let data = await songService.findOneByAlbumId(Number(idAlbum), Number(id))
            res.json(data)
        } else if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser != undefined){
            let data = await songService.findAllInPlaylistByUser(idUser)
            res.json(data)
        }
    }
    findOneByName = async (req,res) => {
        let {song, singer, album, musician} = req.query
        if (song != undefined && singer == undefined && album == undefined && musician == undefined){
            let data = await songService.findByName(song)
            res.json(data)
        } else if (song == undefined && singer != undefined && album == undefined && musician == undefined){
            let data = await songService.findBySingerName(singer)
            res.json(data)
        } else if (song == undefined && singer == undefined && album != undefined && musician == undefined){
            let data = await songService.findByAlbumName(album)
            res.json(data)
        } else if (song == undefined && singer == undefined && album == undefined && musician != undefined){
            let data = await songService.findByMusicianName(musician)
            res.json(data)
        }
    }
}

export default new SongController();
