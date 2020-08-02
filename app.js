
// TODO: select FORM, create GET reuest from base URL 'http://api.giphy.com/v1/gifs/search' of Giphy API
$('form').on('submit', async function(event){
    event.preventDefault();

    let searchTerm = $('#search').val();
    $('#search').val(''); //reset value of input to empty.

    let params = {
        params: {
            q : searchTerm,
            api_key: "tOABssXIdHe3QlBdR0TSMB0aGdH8a6PW"
        }
    }
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', params)

    addGif(response.data);
})

// TODO: Add new div append img: 
function addGif(res){
    let results = res.data.length;
    if (results){
        let randomIdx = Math.floor(Math.random() * results); // pick random index in data array

        const $newCol = $('<div>', { class :"col-12 col-md-4 md-4" });
        const $newGif = $('<img>', {
                                    src: res.data[randomIdx].images.original.url,
                                    class : "w-100"});
        
        $newCol.append($newGif);
        $('#gif-area').append($newCol);
    };
};

// TODO: remove button
$('#remove').on('click', function(){
    $('#gif-area').children().remove();
});































  


// $('#remove').on('click', function(){
//     $('#gif-area').children().remove();
// })



