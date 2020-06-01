// Steps to parse .env file

/**
 * 1- Install @flk/fs package  && import lib
 * 2- Get the root directory
 * 3- Get the .env file path
 * 4- Get the .env file content
 * 5- Parse .env file line by line
 */
//  1- Install @flk/fs package  && import lib
 import {fs} from '@flk/fs';
 import Is from '@flk/supportive-is';

 // 2- Get the root directory && Get the .env file path
 let rootDirectory = process.cwd();

 // 3- Get the .env file content
 let fileContent = fs.get(rootDirectory + '/.env');

 // 4- Parse .env file line by line With Regular Expression
 /**
  * note: new line annotation depend on OS
  * \r || \r\n || \n
  */

  let linesParse = fileContent.split(/\r\n|\n|\r/);

  let data = {};

  for(let line of linesParse){
      //check line undefind or no
        if(! line) continue;
      let [key, value] = line.split('=');
      //console.log(key, value);
      // remove whitespace
      value = value.replace(/^\s|\s/g, '');
      key = key.replace(/^\s|\s/g, '');
      // console.log(key, value);
      // check value 
      if(Is.numeric(value)){
          value = Number(value);
      }
      key = key.toUpperCase();
      process.env[key] = value;
      
      data[key] = value;
  }
  /**
   * Get env value
   * @param {String} key 
   * @param {any} defaultValue 
   * @returns {any}
   */
  export default function env(key, defaultValue = null){
      key = key.toUpperCase();
      return typeof data[key] === undefined ? defaultValue : data[key];
  }
 
 



