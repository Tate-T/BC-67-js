const url = 'http://localhost:1234/student';



function updateStudent(updateStudent) {
    const option = {
        method: 'PATCH',
        body: JSON.stringify(updateStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            // "X-Custom-Header": "custom value",
        }
    }
    // console.log(name);
    return fetch(`${url}/2`, option)
}

const updateNatali = {
    course: "hTML"
}

updateStudent(updateNatali).then(response => {
     if (!response.ok) {
      throw new Error(response.status);
    }
    response.json()
} ).then(data => data).catch(error => console.log("ERROR:", error));

// const updateVasya = {
//            "city" : "Dnipro" 
// }