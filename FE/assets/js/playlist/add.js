document.addEventListener('DOMContentLoaded', () => {
    if (id == null) {
        return;
    } else {
        showAddMusicToPlayList(id)
    }
});

async function showAddMusicToPlayList(id) {
    try {
        const res = await axios.get(`http://localhost:3000/songs/?idPlaylist=${id}&id=0`);
        let data = res.data;
        let str = `
                <tr>
                    <th colspan="5">
                        Recommended
                    </th>
                </tr>
        `;

        data.map((item, i) => {
            str += `
                <tr class="songItem">
                    <td>${item.id}</td>
                    <td class="song-title">
                        <div class="song-image">
                            <img src="${item.imageUrl}">
                        </div>
                        <div class="song-name-album">
                            <h5 class="song-name">${item.name}</h5>
                            <div class="subtitle">${item.singer}</div>
                        </div>
                    </td>
                    <td class="song-album">${item.album.name}</td>
                    <td class="song">
                        <i class="bi playListPlay bi-play-circle-fill" id="${item.id}"></i>
                    </td>
                    <td class="song">
                        <button onclick="addSong()" type="button" class="btn btn-dark">Add</button>
                    </td>
                </tr>
            `;

            // Lưu trữ itemId vào biến ngoài
            itemIdStorage.push(item.id);
        });

        document.getElementById('songAddPlayList').innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}

async function addPlayList() {
    let data = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        imgUrl: document.getElementById('image').value,
        user: {
            id: document.getElementById('userId').value
        },
        description: document.getElementById('description').value,   
    };
    console.log(data);

    try {
        const res = await axios.post(`http://localhost:3000/playlists`, data);
        $('#exampleModal').modal('hide');
        location.reload()
    } catch (error) {
        console.error(error);
    }
}