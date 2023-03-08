module.exports = {
  commands: {

    verifyPageElements() {
      return this
        .waitForElementVisible('@navbar')
        .assert.title("Developer Bookshelf")
        .verifyNavbarElements()
        .verifyJumbotronElements()
        .verifyContentElements()
        .verifyFooterElements();
    },

    verifyNavbarElements() {
      return this
        .waitForElementVisible('@navbar')
        .assert.visible('@navbarBrand')
        .assert.textEquals('@navbarBrand', "Developer Bookshelf")
        .assert.visible('@navbarLinkAuthors')
        .assert.textEquals('@navbarLinkAuthors', "Authors")
        .assert.visible('@navbarLinkBooks')
        .assert.textEquals('@navbarLinkBooks', "Books");
    },

    verifyJumbotronElements() {
      return this
        .waitForElementVisible('@jumbotron')
        .assert.visible('@textJumbotronHeading')
        .assert.textEquals('@textJumbotronHeading', "Developer Bookshelf")
        .assert.visible('@textJumbotronSubHeading')
        .assert.textEquals('@textJumbotronSubHeading', "A Ruby on Rails demo");
    },

    verifyContentElements() {
      return this
        .waitForElementVisible('@content')
        .assert.visible('@linkBrowseByBook')
        .assert.textEquals('@linkBrowseByBook', "book title")
        .assert.visible('@linkBrowseByAuthor')
        .assert.textEquals('@linkBrowseByAuthor', "author name")
        .assert.visible('@linkGithub')
        .assert.textEquals('@linkGithub', "Github")
        .assert.visible('@linkKanbanBoard')
        .assert.textEquals('@linkKanbanBoard', "Kanban board");
    },

    verifyFooterElements() {
      return this
        .waitForElementVisible('@footer')
        .assert.visible('@linkPhotoCredit')
        .assert.textEquals('@linkPhotoCredit', "Photo by Engin Akyurt");
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
      selector: "nav[id='navbar']",
    },

    navbarBrand: {
      selector: "span[id='navbarBrand']",
    },

    navbarLinkHome: {
      selector: "a[id='navbarLinkHome']",
    },

    navbarLinkAuthors: {
      selector: "a[id='navbarLinkAuthors']",
    },

    navbarLinkBooks: {
      selector: "a[id='navbarLinkBooks']",
    },

    // jumbotron
    jumbotron: {
      selector: "div[id='jumbotron']",
    },

    textJumbotronHeading: {
      selector: "h1[id='textJumbotronHeading']",
    },

    textJumbotronSubHeading: {
      selector: "h3[id='textJumbotronSubHeading']",
    },

    // TODO: jumbotron background image
    imgBackground: {
      selector: "//img[@src='...']",
    },

    // content
    content: {
      selector: "div[id='content']",
    },

    linkBrowseByAuthor: {
      selector: "a[id='browseAuthors']",
    },

    linkBrowseByBook: {
      selector: "a[id='browseBooks']",
    },

    linkGithub: {
      selector: "a[id='github']",
    },

    linkKanbanBoard: {
      selector: "a[id='kanban']",
    },

    // footer
    footer: {
      selector: "div[id='footer']",
    },
    
    linkPhotoCredit: {
      selector: "a[id='photoCredit']",
    },

  },

};
