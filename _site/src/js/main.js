// ==== Utility: Case-insensitive inArray ====
function inArrayIn(elem, arr = [], fromIndex = 0) {
  if (typeof elem !== 'string') {
    return arr.indexOf(elem, fromIndex);
  }
  elem = elem.toLowerCase();
  return arr.findIndex((item, i) => {
    return (
      i >= fromIndex &&
      typeof item === 'string' &&
      item.toLowerCase() === elem
    );
  });
}

// ==== Utility: Get query parameter by name ====
function getParameterByName(name) {
  name = name.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// ==== Main search logic ====
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('SearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Stop the form from navigating
      const query = document.getElementById('searchbox')?.value.trim();
      if (!query) return;

      const newURL = `${searchForm.action}?searchbox=${encodeURIComponent(query)}`;
      window.history.pushState({}, '', newURL);
      getSearchResults();
    });

    // Optionally trigger search if query param exists on page load
    if (getParameterByName('searchbox')) {
      getSearchResults();
    }
  }

  // ==== Function: Get and render search results ====
  function getSearchResults() {
    const countDisplayParent = document.querySelector('h1#searchHeader');
    const resultSection = document.querySelector('div#buildResults');
    if (!resultSection) {
      console.error('Missing <div id="buildResults"> in the DOM.');
      return;
    }

    resultSection.innerHTML = ''; // Clear previous results

    const searchedFor = getParameterByName('searchbox');
    const searchedForTest = searchedFor.toLowerCase();

    const searchInput = document.querySelector('#searchbox');
    if (searchInput) searchInput.value = searchedFor;

    const section = document.createElement('section');
    section.className = 'col-xs-12 col-sm-6 col-md-12';
    resultSection.appendChild(section);

    fetch('/search.json')
      .then((response) => response.json())
      .then((data) => {
        let count = 0;

        data.forEach((val) => {
          const blogTitle = val.title;
          const blogCategory = val.category || [];
          const blogTags = val.tags || [];
          const blogLink = val.href;
          const blogDate = val.date;
          const blogSummary = val.summary;

          const testCategory = inArrayIn(searchedForTest, blogCategory);
          const testTags = inArrayIn(searchedForTest, blogTags);

          if (
            blogTitle.toLowerCase().includes(searchedForTest) ||
            testCategory > -1 ||
            testTags > -1
          ) {
            displayResult(
              blogTitle,
              blogCategory,
              blogTags,
              blogLink,
              blogDate,
              blogSummary
            );
            count++;
          }
        });

        const summaryHTML = `<h2 class="lead"><strong class="text-danger">${count}</strong> results were found for the search for <strong class="text-danger">${searchedFor}</strong></h2>`;
        countDisplayParent.insertAdjacentHTML('afterend', summaryHTML);

        section.insertAdjacentHTML('beforeend', '</section>');
      })
      .catch((error) => {
        console.error('Error fetching search.json:', error);
      });
  }

  // ==== Function: Render single search result ====
  function displayResult(
    blogTitle,
    blogCategory,
    blogTags,
    blogLink,
    blogDate,
    blogSummary
  ) {
    const buildResults = document.querySelector('div#buildResults');

    const tagLinks = blogTags
      .filter((tag) => tag !== null)
      .map(
        (tag) =>
          `<span class="label label-primary taggedPost"><a href="/search/?searchbox=${tag}">${tag}</a></span>`
      )
      .join(' ');

    const html = `
      <article class="posts blogpage">
        <h2 class="entry-title">
          <a class="post-link" href="${blogLink}">${blogTitle}</a>
        </h2>
        <div class="entry-summary">
          <p>
            ${blogSummary}
            <a href="${blogLink}">Continued</a>
          </p>
        </div>
        <span class="badge blog-date">
          <time class="published">${blogDate}</time>
        </span>
        <div class="pull-right">
          ${tagLinks}
        </div>
      </article>
    `;

    buildResults.insertAdjacentHTML('beforeend', html);
  }
});