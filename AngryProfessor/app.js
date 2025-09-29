function angryProfessor(k, a) {
   
    const onTimeStudents = a.filter(time => time <= 0).length;
    
   
    return onTimeStudents >= k ? "NO" : "YES";
}
