document.addEventListener('DOMContentLoaded', function(){
    //Load video json
    fetch('projects.json').then(response => response.json()).then(data => {

        //for all elements of the json
        data.videos.forEach(projectData => {
            const videoGrid = document.querySelector(".project__grid");

            //create tile
            const tile = document.createElement("div");
            tile.className = "project__tile";

            //create hyperlink for the videos
            const link = document.createElement("a");
            link.href = projectData.link;
            link.target = "_blank";

            //create description for video
            const description = document.createElement("p");
            description.textContent = projectData.description;

            //create thumbnail image
            const thumbnail = document.createElement("img");
            thumbnail.src = `./images/${projectData.image}`;
            thumbnail.alt = projectData.title;
            thumbnail.classList.add("project__image");

            //create video title
            const title = document.createElement("h1");
            title.textContent = projectData.title;

            //connect them in the DOM
            link.appendChild(thumbnail);
            tile.appendChild(link);
            tile.appendChild(title);
            tile.appendChild(description);
            videoGrid.appendChild(tile);

        });
    });

});