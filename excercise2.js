function isPalindrome(str) {
    //Hiq te gjitha karakteret qe nuk jane shkronja apo numer
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Kthejme stringun e paster mbrapsht
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Kontrollo nese stringu i paster eshte i njejte me stringun e kthyer mbrapsht
    return cleanedStr === reversedStr;
}