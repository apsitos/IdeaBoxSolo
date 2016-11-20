var title = $('.entered-title');
var body = $('.entered-idea')

$('.save-button').on('click', function() {
  displayIdea();
});


function CreateIdea(id, title, body, quality) {
  this.id = id || Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
}

function displayIdea() {

}
