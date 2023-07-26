export const stringLength=(str)=> {
  if (str<1||str>10){
    throw new Error('String length must be between 1 and 10 characters.');
  };
  return str.length;
};

export const reverseString=(str) =>{
  return str.split('').reverse().join('');
}

