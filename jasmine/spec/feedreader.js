$(function() {

  describe('RSS Feeds', function() {

    /* Test that ensures the
     * allFeeds variable has been defined and that it is not
     * empty.
     */

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('urls are defined and not empty', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });


    /* Test that loops through each feed in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */


    it('names are defined and not empty', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  describe('The menu', function() {

    //Test that ensures the menu element is hidden by default.

    it('menu is hidden by default', function() {
      const body = document.querySelector('body');

      expect(body.classList.contains('menu-hidden')).toBe(true);

    });

    //Test that ensures the menu changes visibility when the menu icon is clicked.

    it('menu changes visibility when the menu icon is clicked', function() {
      const body = document.querySelector('body');
      const menuIcon = document.querySelector('.menu-icon-link');

      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    })

  });



  describe('Initial Entries', function() {

    //Test that ensures when the loadFeed function is called and completes its work.

    beforeEach(function(done) {
      loadFeed(0, done);
    })

    it('loadFeed function is called and completes its work', function() {
      const feed = document.querySelector('.feed .entry');

      expect(feed.children.length > 0).toBe(true);
      
    })


  });

  describe('New Feed Selection', function() {

    //Test that ensures when a new feed is loaded

    let firstFeed, secondFeed;


    beforeEach(function(done) {
      loadFeed(3, function() {
        firstFeed = document.querySelector('div.feed').innerHTML;
        loadFeed(2, function() {
          secondFeed = document.querySelector('div.feed').innerHTML;
          done();
        })
      })
    });

    it('New feed is loaded', function() {
      expect(firstFeed).not.toBe(secondFeed);
    })
  });
}());
