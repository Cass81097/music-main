document.addEventListener('DOMContentLoaded', () => {
    if (id !== null) {
        showPlayListCover(id);
        showPlayListInfo(id);
        showPlayUser(id);
    } else {
        showPlayListCoverByCookie(idCookie);
    }
});

async function showPlayListCoverByCookie(idCookie) {
    try {
        const res = await axios.get(`http://localhost:3000/${idCookie}`);
        let data = res.data;

        data.map(item => {
            str1 = `
            <img src="${item.imgUrl}">
            `;
        });

        data.map(item => {
            str2 = `
            <div class="playlist-public">Nhạc của :</div>
            <div class="playlist-title">${item.username}</div>
            <div style="height: 10px;"></div>
            <div class="playlist-stats">
                <img src="../assets/images/spotify-logo.png" width="24px" height="24px" alt="">
            </div>
            `;
        });

        document.getElementById('playlist-cover').innerHTML = str1;
        document.getElementById('playlist-info').innerHTML = str2;

    } catch (error) {
        console.error(error);
    }
}

async function showPlayListCover(id) {
    try {
        const res = await axios.get(`http://localhost:3000/songs/?idPlaylist=${id}`);
        let data = res.data;
        let str = ''

        data.map(item => {
            str = `
            <img src="${item.playlist.imgUrl}">
            `;
        });

        document.getElementById('playlist-cover').innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}

async function showPlayListInfo(id) {
    try {
        const res = await axios.get(`http://localhost:3000/songs/?idPlaylist=${id}`);
        let data = res.data;
        let str = ''

        data.map(item => {
            str = `
            <div class="playlist-public">Playlist</div>
            <div class="playlist-title">${item.playlist.name}</div>
            <div style="height: 10px;"></div>
            <div class="playlist-stats">
                <img src="../assets/images/spotify-logo.png" width="24px" height="24px" alt="">
            </div>
            `;
        });

        document.getElementById('playlist-info').innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}

async function showPlayUser(id) {
    try {
        const res = await axios.get(`http://localhost:3000/${id}`);
        let data = res.data;

        data.map(item => {
            str = `
            <img src="${item.imgUrl}">
            `;
        });
        document.getElementById('user').innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}