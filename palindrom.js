var string = ''

function wordIsPalindrom(string) {
  if (string == string.split('').reverse().join('')) {
    alert("Word is palindrome!")
  }else{
    alert("Word is mot palindrome")
  }
}