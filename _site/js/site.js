/*fixes from bootstrap site*/
//fix win phone
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );
  document.querySelector('head').appendChild(msViewportStyle);
}

//fix android
var nua = navigator.userAgent;
var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
if(is_android) {
    $('select.form-control').removeClass('form-control').css('width', '100%');

}
/*end fixes from bootstrap site*/

/*personal code start*/
//declare vars
var blogLink = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('SELECT entry.title,entry.link.href,entry.published,entry.category.term,entry.summary FROM feednormalizer WHERE url= "http://jenntesolin.com/blog/feed/atom/" AND output="atom_1.0" LIMIT 1')+'&format=json&diagnostics=false&callback=?';
//end variable declare

jQuery.noConflict();
jQuery(document).ready(function($){

	//Call blog feed
	$.getJSON(blogLink, function(data){
		//get data
		var title =data.query.results.feed.entry.title.content;
		var link =data.query.results.feed.entry.link.href;
		var category =data.query.results.feed.entry.category.term;
		var published=data.query.results.feed.entry.published;
		var summary =data.query.results.feed.entry.summary.content;

		//display
		$('.blog-header').html(title);
		$('.blog-summary').html(summary);
		$('.blog-date').html(published);
		$('.blog-category').html(category);
		$('.blog-link').html('<a href="'+link+'" target="_blank">Read more</a>');
	});
	//end blog feed
});
/*personal code end*/