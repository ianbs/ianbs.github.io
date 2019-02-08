ul_rep = $('#rep');

function getRepo(data) {
  return new Promise((resolve, reject) => {
    $.ajax({ 
      method: 'GET', 
      url: 'https://api.github.com/users/ianbs/repos',
      success: resolve, 
      error: reject,
      data
    });
  });
}

getRepo()
.then((data) => {
  for (i in data) {
    ul_rep.append(
      $('<li></li>')
        .addClass('collection-item avatar')
        .append($('<i></i>').addClass('material-icons circle').text('code'))
        .append($('<span></span>').addClass('title').text(data[i].name))
        .append($('<p></p>').text('Linguagem: ' + data[i].language))
        .append($('<p></p>').text(data[i].owner.login))
        .append($('<p></p>').text('Descrição: ' + data[i].description))
        .append($('<p></p>').text('Criado em: ' + data[i].created_at))
        .append($('<a></a>').attr('href', data[i].html_url).addClass('secondary-content').html("<i class='material-icons'>call_made</i>"))
    );
  }
})
.catch((err) => {
  console.log('Erro', err);
})
