var $title = $('.title');
var $body = $('.idea');
var ideaArray = JSON.parse(localStorage.getItem('newIdea')) || [];

$('document').ready(function(){
  getStorage();
})

$('.save-button').on('click', function() {
  var titleInput = $title.val();
  var bodyInput = $body.val();
  var newIdea = new CreateIdea(titleInput, bodyInput)
  var id = newIdea.id;
  var quality = newIdea.quality;
  displayIdea(titleInput, bodyInput, id, quality);
  ideaArray.push(newIdea);
  saveToStorage();
  clearForm();
});


function CreateIdea($title, $body, id, quality) {
  this.id = id || Date.now();
  this.title = $title;
  this.body = $body;
  this.quality = quality || 'swill';
}

function displayIdea(titleInput, bodyInput, id, quality) {
  $('.idea-list').prepend(`<li id="${id}" class="new-idea"><h2 class="entered-title">${titleInput}</h2>
    <button type="button" class="delete" name="delete" img src="../images/delete.svg"></button>
    <h3 class="entered-idea">${bodyInput}</h3>
    <button type="button" class="upvote" name="upvote" img src="../images/upvote.svg"></button>
    <button type="button" class="downvote" name="downvote" img src="../images/downvote.svg"></button>
    <p class="quality">quality: <span class="user-quality">${quality}</span></p>
  </li>`)
};

$('ul').on('click', '.delete', function() {
  var id = this.closest('li').id;
  removeIdea(id);
  $(this).closest('li').remove();
})


function saveToStorage() {
  localStorage.setItem('newIdea', JSON.stringify(ideaArray));
};

function getStorage() {
  var storedIdeas = JSON.parse(localStorage.getItem('newIdea'));
  if (storedIdeas) {
    for (i = 0; i < storedIdeas.length; i++){
      var list = storedIdeas[i];
      displayIdea(list.title, list.body, list.id, list.quality);
    };
  };
};

function clearForm() {
  var titleInput = $title.val('');
  var bodyInput = $body.val('');
}

function removeIdea(id, index) {
  for (var i = 0; i < ideaArray.length; i++) {
    if (ideaArray[i].id === parseInt(id)) {
      ideaArray.splice(i, 1);
    };
    saveToStorage();
  };
};
