require.config({
  baseUrl: '/js',

    paths: {
        'jquery': 'jquery-1.11.1.min',
        'jquery.bootstrap': 'bootstrap.min'
    },
    shim: { 
        'jquery.bootstrap': ['jquery']
    }
});

require(['jquery','jquery.bootstrap'], function($) {
     /*fixes from bootstrap site*/
      /*fix win phone*/
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
          document.createTextNode(
            '@-ms-viewport{width:auto!important}'
          )
        );
        document.querySelector('head').appendChild(msViewportStyle);
      }

      /*fix android*/
      var nua = navigator.userAgent;
      var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
      if(is_android) {
          $('select.form-control').removeClass('form-control').css('width', '100%');

      }
      /*end fixes from bootstrap site*/

    jQuery.noConflict();
    jQuery(document).ready(function($){

      /*  start site search */

      var noResultsPage = function(property, value) {
        $('h1').text('No Results Found.').after(
          '<p>Sorry, the term: ‘' + value + '’ has not been indexed.</p>'
        );
      };

      var layoutResultsPage = function(property, value, posts) {
        $('h1').text(property + ' Listing for ‘' + value + '’');

        // Loop through each post to format it
        for (var i in posts) {
          // Create an unordered list of the post's tags
          var tagsList = '<ul class="tags">',
              post     = posts[i],
              tags     = post.tags;

          for (var j in tags) {
            tagsList += ''
              + '<li>'
                + '<a href="/search.html?tags=' + tags[j] + '">' + tags[j] + '</a>'
              + '</li>';
          }
          tagsList += '</ul>';

           $('ul.results').append(
            '<li>'
              // Page anchor
              + '<header>'
                + '<h1>'
                  + '<a href="' + post.href + '">' + post.title + '</a>'
                + '</h1>'
                // Post date
                + '<h2>'
                  + post.date.formatted
                  + ' in <a href="/search.html?category=' + post.category + '">'
                  +  post.category + '</a>'
                + '</h2>'
                // Tags
                + tagsList
              + '</header>'
            + '</li>'
          );
        }
      };

      var map = {
        'category' : getParam('category'),
        'tags'     : getParam('tags'),
        'title'     : getParam('title')
      };

      $.each(map, function(type, value) {
        if (value !== null) {
          $.getJSON('/search.json', function(data) {
            posts = filterPostsByPropertyValue(data, type, value);
            if (posts.length === 0) {
              noResultsPage();
            } else {
              layoutResultsPage(type, value, posts);
            }
          });
        }
      });
       /*  end site search */

    });
    //end jquery functions
});