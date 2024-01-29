const URL = 'http://localhost:1234/student';

function getStudents() {
    return  fetch(url).then(response => 
        response.json()
    )
}

getStudents()

function getStudentByCourse(course) {
    fetch(`${URL}?course=${course}`)
}

getStudentByCourse('js')

function getStudentById(id) {
    fetch(`${URL}?id=${id}`)
}

getStudentByCourse(2)

