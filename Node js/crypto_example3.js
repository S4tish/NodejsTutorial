// Decryption Example using Decipher

const crypto=require('crypto');

const decipher=crypto.createDecipher('aes192','a password');

var encrypted='a89c5904afe4737dc02eca58015b331254f8e42ed39bc375ef82b7e899d1eaa4';

var decrypted=decipher.update(encrypted,'hex','utf8');

decrypted +=decipher.final('utf8');

console.log(decrypted);