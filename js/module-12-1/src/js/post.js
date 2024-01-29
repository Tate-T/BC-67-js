const URL = 'http://localhost:1234/student';



function postStudent(newStudent) {
    const option = {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: {
            "Content-Type": "application/json",
            "X-Custom-Header": "custom value",
        }
    }

    return fetch(URL, option)
}

const studentNatali = {
           "name" : "Natali",
           "course" : "js",
           "city" : "Mykolaiv" 
}

postStudent(studentNatali).then(response => response.json()).then(data => console.log(data));

const studentVasya = {
           "name" : "Vasya",
           "course" : "HTML",
           "city" : "Lviv" 
}