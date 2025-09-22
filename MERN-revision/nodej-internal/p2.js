
import crypto from "crypto";
// const password = 'mySecret123';
// const salt = crypto.randomBytes(16).toString('hex');
// const iterations = 100000;
// const keylen = 64;
// const digest = 'sha512';
console.log("At the start"); // Executed by V8 Engine
crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Hashed Password:", derivedKey.toString('hex'));
});

crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });


  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });


  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });

  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });

  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });

  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });

  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });

  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });

  crypto.pbkdf2("MPIF@1234", "wrwerwer", 1000000, 50, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("Hashed Password:", derivedKey.toString('hex'));
  });
  console.log("At the end"); // V8 engine will take care


/*
  events
  fs,
  http
  path
  url
  body-parser
  express
  mysql2
  sequelize
  crypto
  bcryptjs
  cookie-parser
  cors
  jsonwebtoken
  express-validator
  multer
  nodemailer
  axios
  dotenv
  mongoose
*/