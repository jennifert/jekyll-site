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

/*extend inArray*/
(function($){
    $.extend({
        // Case insensative $.inArray (http://api.jquery.com/jquery.inarray/)
        // $.inArrayIn(value, array [, fromIndex])
        //  value (type: String)
        //    The value to search for
        //  array (type: Array)
        //    An array through which to search.
        //  fromIndex (type: Number)
        //    The index of the array at which to begin the search.
        //    The default is 0, which will search the whole array
        //from: http://stackoverflow.com/questions/3390930/any-way-to-make-jquery-inarray-case-insensitive
        inArrayIn: function(elem, arr, i){
            // not looking for a string anyways, use default method
            if (typeof elem !== 'string'){
                return $.inArray.apply(this, arguments);
            }
            // confirm array is populated
            if (arr){
                var len = arr.length;
                    i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0;
                elem = elem.toLowerCase();
                for (; i < len; i++){
                    if (i in arr && arr[i].toLowerCase() == elem){
                        return i;
                    }
                }
            }
            // stick with inArray/indexOf and return -1 on no match
            return -1;
        }
    });
})(jQuery);
/*end Extend*/


    jQuery.noConflict();
    jQuery(document).ready(function($){
        

        /*
        *function to help get query sting.
        * from: http://stackoverflow.com/questions/9501690/javascript-documentation-on-getparameterbyname
        */
        var getParameterByName = function(name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        };

        /*start search function;*/
        var getSearchResults = function(url) {

          var count = 0;
          var searchedFor = getParameterByName('searchbox'); //get the query parameter from search box
          var searchedForTest = searchedFor.toLowerCase();
          $('#searchbox').val(searchedFor); //update input field with what was searched for

          $.getJSON('/search.json', function(data) {
            $('div#results').append('<section class="col-xs-12 col-sm-6 col-md-12">');
            $.each(data, function(key, val){
              
              //values to variable to use more than once.
              var blogTitle = val.title;
              var blogCategory = val.category;
              var blogTags = val.tags;
              var blogLink = val.href;
              var blogDate = val.date;
              var blogSummary = val.summary;

              //search array for
              var testCategory = $.inArray(searchedForTest, blogCategory );
              var testTags = $.inArray(searchedForTest, blogTags );

              if ( (blogTitle.toLowerCase().indexOf(searchedForTest) > -1 )  || (testCategory > -1 ) ||  (testTags > -1 ) ) {
                displyResult(blogTitle,blogCategory,blogTags,blogLink,blogDate,blogSummary);
                 count++;
              } else {
                  //result not found. Do NOT increment count here.
              }
              
            }); //end for each
              
              $('h1#searchHeader').after('<h2 class="lead"><strong class="text-danger">'+ count+'</strong> results were found for the search for <strong class="text-danger">'+ searchedFor+'</strong></h2>');
              $('div#rbuildResults').append('</section>');

          }); //end json

        };//end get search results

        //make display of search results
        var displyResult = function(blogTitle,blogCategory,blogTags,blogLink,blogDate,blogSummary) {

          var results = '<article class="posts blogpage">'+
            '<h2 class="entry-title">'+
            '<a class="post-link" href="'+blogLink+'">'+blogTitle+'</a>'+
            '</h2>'+
            '<div class="entry-summary">'+
            '<p>'+
            blogSummary +
            '<a href="'+blogLink+'">Continued</a>'+
            '</p>'+
            '</div>'+
            '<span class="badge blog-date">'+
            '<time class="published">'+
            blogDate+
            '</time>'+
            '</span>'+
            '<div class="pull-right">';

              for (var j in blogTags) {
                if (blogTags[j]  === null){
                } else {  
                  results = results + ' <span class="label label-primary taggedPost"><a href="/search.html?searchbox='+blogTags[j]+'">' + blogTags[j] + '</a></span> ';
                }
                
              }
           
            results = results + '</div>'+
            '</article>';

            $('div#buildResults').append(results);
        };
      /*end search function*/

       getSearchResults('/search.json');

          
          


    });
    //end jquery functions