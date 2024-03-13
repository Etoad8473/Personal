document.addEventListener('DOMContentLoaded', function(){
    //Load video json
    fetch('videos.json').then(response => response.json()).then(data => {

        //for all elements of the json
        data.videos.forEach(videoData => {
            const videoGrid = document.querySelector(".video__grid");

            //create tile
            const tile = document.createElement("div");
            tile.className = "video__tile";

            //create hyperlink for the videos
            const link = document.createElement("a");
            link.href = videoData.link;
            link.target = "_blank";

            //create description for video
            const description = document.createElement("p");
            description.textContent = videoData.description;

            //create thumbnail image
            const thumbnail = document.createElement("img");
            thumbnail.src = `./images/${videoData.thumbnail}`;
            thumbnail.alt = videoData.title;
            thumbnail.classList.add("video__thumbnail");

            //create video title
            const title = document.createElement("h1");
            title.textContent = videoData.title;

            //connect them in the DOM
            link.appendChild(thumbnail);
            tile.appendChild(link);
            tile.appendChild(title);
            tile.appendChild(description);
            videoGrid.appendChild(tile);

        });
    });

});