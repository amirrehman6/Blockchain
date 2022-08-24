// alert("hello world");

/*
=============================================
DECLARING VARIABLES
============================================= */

/*

=============================================================
=           =       var     =       let     =       const   =
=============================================================
=Re-declare =       yes     =       no      =       no      =
=Updateable =       yes     =       yes     =       no      =
=Hoisting   =    undefined  =       error   =       error   =
=============================================================

1. var declarations are globally scoped or function scoped 
   while let and const are block scoped.
2. var variables can be updated and re-declared within its scope;
   let variables can be updated but not re-declared;
   const variables can neither be updated nor re-declared.
3. They are all hoisted to the top of their scope.
   But while var variables are initialized with undefined,
   let and const variables are not initialized.
4. While var and let can be declared without being initialized,
   const must be initialized during declaration.

*/





// In two lines
var varName;
varName = "Amir";

// In single line
var varInteger = 4;

const x = 5;
let y = 6;

// console.log(varName,varInteger);

var $amir = "$amir";
var _amir = "_amir";
var a_m$1r = 'a_m$1r';

console.log($amir,_amir,a_m$1r,x,y);
