var licenseKeyFormatting = function(S, K) {
  let array = [];
  const arrayWithNoDash = S.split('-').join('');
  let counter = 0;
  for (let i = arrayWithNoDash.length - 1; i >= 0; i -= 1) {
      array.push(arrayWithNoDash[i].toUpperCase());
      counter += 1;
      if (counter % K === 0 && i !== 0) {
          array.push('-');
      }
      
  }
  return array.reverse().join('')
};