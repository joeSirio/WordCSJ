$(function(){
    populateGrid();
})

function populateGrid(){
    console.log(grid_data);
    let data = grid_data.Words;
    var html = ""
    for(var i = 0; i < data.length; i++){

        html += `
            <div class="data-row">
                <div class="word-item">` +
                    data[i].word +
                `</div>
                <div class="game-item">`
        for(var j = 0; j < data[i].game.length; j++) {
            if(j !== 0){
                html += ", "
            }
            html += '<span class="' + data[i].game[j].diff + '">' +
                data[i].game[j].type + " - " + data[i].game[j].diff +
                `</span>`


        }
        html += `
            </div>
            <div class="cat-item">
        `;
        for(var j = 0; j < data[i].cat.length; j++) {
            if(j !== 0){
                html += ", "
            }
            html +=
                data[i].cat[j]

        }
        html += `
                </div>
            </div>
        `;
    }

    $(".data-rows").append(html);




}

var grid_data = {
    "Words": [
        {
            "word": "Angel Island",
            "game": [{"type": "Pictionary", "diff": "Easy"}, {"type": "Claymation", "diff": "Hard"}],
            "cat": ["Places"]
        },
        {
            "word": "Bat Cave",
            "game": [{"type": "Pictionary", "diff": "Easy"}, {"type": "Claymation", "diff": "Impossible"}],
            "cat": ["Places"]
        },
        {
            "word": "Beer",
            "game": [{"type": "Charades", "diff": "Medium"}, {"type": "Pictionary", "diff": "Impossible"}, {"type": "Claymation", "diff": "Hard"}],
            "cat": ["Thing", "Food"]
        },
        {
            "word": "Beetle Juice",
            "game": [{"type": "Charades", "diff": "Easy"}, {"type": "Pictionary", "diff": "Medium"}, {"type": "Claymation", "diff": "Hard"}],
            "cat": ["Person", "Movie"]
        },
        {
            "word": "Cat",
            "game": [{"type": "Pictionary", "diff": "Easy"}, {"type": "Claymation", "diff": "Hard"}],
            "cat": ["Animal"]
        },
    ]
}