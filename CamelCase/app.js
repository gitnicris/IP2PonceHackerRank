function camelcase(s) {
    
    return s.split('').filter(char => char >= 'A' && char <= 'Z').length + 1;
}
