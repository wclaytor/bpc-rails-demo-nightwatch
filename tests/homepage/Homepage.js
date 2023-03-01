/* eslint-disable func-names, no-param-reassign */
module.exports = {

    '01. Launch Homepage': function (client) {
      client.page.Homepage().navigate();
    },
  
    '02. Verify Homepage': function (client) {
      client.page.Homepage()
        .verifyPageElements();
    },
  
    '03. End': function (client) {
      client.end();
    },
  
  };
  