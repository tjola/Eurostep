/*Write a simple javascript function that returns a boolean indicating whether or not a string is a
palindrome. A palindrome is a string that is spelled the same forwards and backwards.
Example: radar, racecar, rotator, “as sdfg gfds sa”.*/
function isPalindrome(str) {
    //Hiq te gjitha karakteret qe nuk jane shkronja apo numer
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Kthejme stringun e paster mbrapsht
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Kontrollo nese stringu i paster eshte i njejte me stringun e kthyer mbrapsht
    return cleanedStr === reversedStr;
}