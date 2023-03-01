module.exports = {
  commands: {

    verifyPageElements() {
      return this
        .waitForElementVisible('@textHeading')
        .verifyNavbarElements()
        .verifyHeaderElements()
        .verifyContentElements()
        .verifyFooterElements();
    },

    verifyNavbarElements() {
      return this
        .waitForElementVisible('@navbar')
        .assert.visible('@navbarBrand')
        .assert.visible('@navbarLinkAuthors')
        .assert.visible('@navbarLinkBooks');
    },

    verifyHeaderElements() {
      return this
        .waitForElementVisible('@header')
        .assert.visible('@textHeading')
        .assert.visible('@textSubHeading');
    },

    verifyContentElements() {
      return this
        .waitForElementVisible('@content')
        .assert.visible('@linkBrowseByBook')
        .assert.visible('@linkBrowseByAuthor')
        .assert.visible('@linkGithub')
        .assert.visible('@linkKanbanBoard');
    },

    verifyFooterElements() {
      return this
        .waitForElementVisible('@footer')
        .assert.visible('@linkPhotoCredit');
    },

    browseByAuthor() {
      return this
        .waitForElementVisible('@linkBrowseByAuthor')
        .click('@linkBrowseByAuthor')
        .waitForElementNotPresent('@linkBrowseByAuthor');
    },

    browseByBook() {
      return this
        .waitForElementVisible('@linkBrowseByBook')
        .click('@linkBrowseByBook');
    },

  },

  url() {
    return this.api.globals.homepageUrl;
  },

  elements: {

    // TODO: extract into sections

    // navbar
    navbar: {
      selector: "//nav[@id='main-navbar']",
      locateStrategy: 'xpath',
    },

    navbarBrand: {
      selector: "//span[@class='navbar-brand'][text()='Developer Bookshelf']",
      locateStrategy: 'xpath',
    },

    navbarLinkHome: {
      selector: "//a[@class='nav-link'][text()='Home']",
      locateStrategy: 'xpath',
    },

    navbarLinkAuthors: {
      selector: "//a[@class='nav-link'][text()='Authors']",
      locateStrategy: 'xpath',
    },

    navbarLinkBooks: {
      selector: "//a[@class='nav-link'][text()='Books']",
      locateStrategy: 'xpath',
    },

    // header
    header: {
      selector: "//div[@id='header']",
      locateStrategy: 'xpath',
    },

    textHeading: {
      selector: "//h1[text()='Developer Bookshelf']",
      locateStrategy: 'xpath',
    },

    textSubHeading: {
      selector: "//h3[text()='A Ruby on Rails demo']",
      locateStrategy: 'xpath',
    },

    // TODO: jumbotron background image
    imgBackground: {
      selector: "//img[@src='...']",
      locateStrategy: 'xpath',
    },

    // content
    content: {
      selector: "//div[@id='content']",
      locateStrategy: 'xpath',
    },

    linkBrowseByAuthor: {
      selector: "//a[text()='author name']",
      locateStrategy: 'xpath',
    },

    linkBrowseByBook: {
      selector: "//a[text()='book title']",
      locateStrategy: 'xpath',
    },

    linkGithub: {
      selector: "//a[text()='Github']",
      locateStrategy: 'xpath',
    },

    linkKanbanBoard: {
      selector: "//a[text()='Kanban board']",
      locateStrategy: 'xpath',
    },

    // footer
    footer: {
      selector: "//div[@id='footer']",
      locateStrategy: 'xpath',
    },
    
    linkPhotoCredit: {
      selector: "//a[text()='Photo by Engin Akyurt']",
      locateStrategy: 'xpath',
    },

  },

};
