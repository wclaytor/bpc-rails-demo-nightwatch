/* eslint-disable func-names, no-param-reassign */
module.exports = {

  '01. Launch Homepage': function (client) {
    client.page.Homepage()
      .navigate();
  },

  '02. Verify Homepage': function (client) {
    client.page.Homepage()
      .verifyPageElements();
  },

  '03. Browse by Author': function (client) {
    client.page.Homepage()
      .browseByAuthor();
  },

  // TODO: implement
  // '04. Verify Sign In Page': function (client) {
  //   client.page.SignIn()
  //     .verifyPageElements();
  // },

  // '05. Sign In': function (client) {
  //   client.page.SignIn()
  //     .signInGuest();
  // },

  // '06. Verify Authors Page': function (client) {
  //   client.page.Authors()
  //     .verifyPageElements();
  // },

  '99. End': function (client) {
    client.end();
  },

};
