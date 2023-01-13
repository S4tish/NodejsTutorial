// What is TLS/SSL

// TLS stand for Transport layer security .It is the successor to secure sockets layer (SSL)
// TLS along with SSL is used for cryptographic protocol to secure communication over the web

// TLS uses public-key cryptography to encrypt messages.It encrypts communication generally on
// the TCP layer

// What is public key cryptography

// In the public key cryptography each client and each server has two keys:public key and private
// key .Public key is shared with everyone and private key is secured.To encrypt a message a 
// computer requires its private key and the recipient. public key. On the other hand to decrypt
// the message the recipient requires its own

// You have to use require('tls') to access this module

// Syntax
// var tls=require('tls');

// The tls module uses openSSL to attain Transport layer Security and secure socket layer.TLS/SSL
// is a public/private key infrastructure.Each client and each server must have a private key