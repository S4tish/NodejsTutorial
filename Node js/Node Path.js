// The Nodejs path module is used to handle and transform files path .This module can be imported
// by using the following syntax

// syntax
const { CommandFailedEvent } = require("mongodb");
var path=require("path");

// Node.js Path methods

// 1 path.normalize(p)  ==  It is used to normalize a string path,taking care of ..'' and''.parts

// 1 path.join([path1][,path2][,...]) = It is used to join all arguments together and normalize the 
// resulting path

// 3 path.resolve([from ...],to) == It is used to resolve an absolute path

// 4 path.isabsolute(path) == It determines whether path is an absolute path am absolute path will
//always resolve to the same location regardless of the working directory

// 5 path.dirname(p) == It return the directory name of a path.Ot is similar to the unix dirname
// command

// 6 path.basename(p[,ext]) == It return the last portion of a path.It is similar to the unix basename 
// command

// 7 path.extname(p) == It return the extension of the path from the last to end of string in the last portion 
// of the path .If there is no in the last portion of the path or the first character of it.is '.',
// then it return an empty string


// 8 path.parse(pathstring) == It return an object from a path string

// 10 path.format(pathobject) == It return a path string from an object the opposite of path.parse
// above