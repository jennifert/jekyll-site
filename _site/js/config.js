require.config({
    paths: {
        'jquery': 'http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.11.0.min',
        'jquery.bootstrap': 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min'
    },
    shim: { 
        'jquery.bootstrap': ['jquery']
    }
});

require(['jquery','jquery.bootstrap'], function($) {
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

    //start jquery functions
    //declare vars
    //var blogLink = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('SELECT entry.title,entry.link.href,entry.published,entry.category.term,entry.summary FROM feednormalizer WHERE url= "http://jenntesolin.com/blog/feed/atom/" AND output="atom_1.0" LIMIT 1')+'&format=json&diagnostics=false&callback=?';
    /*var flickerPhotoTag='carousel';
    var temp='';
    var getFlickrPhotoIdsByUsername = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select id from flickr.people.publicphotos where user_id="68631186@N06" and api_key="c00ac054694485d0a21931ecaf6debca";')+'&format=json&diagnostics=false&callback=?';
    var getFlickrPictureInfoById = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select dateuploaded,tags,views,title,description,comments  from flickr.photos.info where photo_id="2186714153" and api_key="c00ac054694485d0a21931ecaf6debca";')+'&format=json&diagnostics=false&callback=?';
    var getFlickrPhotoExifData = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from flickr.photos.exif where photo_id="2186714153" and api_key=“c00ac054694485d0a21931ecaf6debca";')+'&format=json&diagnostics=false&callback=?';
    var getFlickrPhotoUrl = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select urls.url from flickr.photos.info where photo_id=2439864402 and api_key=“c00ac054694485d0a21931ecaf6debca";')+'&format=json&diagnostics=false&callback=?';
    *///end variable declare

    jQuery.noConflict();
    jQuery(document).ready(function($){

      //Call blog feed
     /* $.getJSON(blogLink, function(data){
        //get data
        var title =data.query.results.feed.entry.title.content;
        //var link =data.query.results.feed.entry.link.href;
        var category =data.query.results.feed.entry.category.term;
        var published=data.query.results.feed.entry.published;
        var summary =data.query.results.feed.entry.summary.content;

        //display
        $('.blog-header').html(title);
        $('.blog-summary').html(summary);
        $('.blog-date').html(published);
        $('.blog-category').html(category);
        //$('.blog-link').html('<a href="'+link+'" target="_blank">Read more</a>');
      });*/
      //end blog feed
    });
    //end jquery functions
});