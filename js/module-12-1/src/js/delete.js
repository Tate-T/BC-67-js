const url = 'http://localhost:1234/student';

function deleteStudent(name) {
    const option = {
        method: 'DELETE',
       
    }
    // console.log(name);
    return fetch(`${url}/name=${name}`, option)
}



deleteStudent({name: 'Djon'}).then(response => {
     if (!response.ok) {
      throw new Error(response.status);
    }
    response.json()
} ).then(data => data).catch(error => console.log("ERROR:", error));

