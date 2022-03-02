// Add your code here
function submitData (name, email) {
    const formData = {
        "name": name,
        "email": email 
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
        const id = data.id
        const p = document.createElement("p");
        document.querySelector("#stuff").append(id, p)
    })
    .catch(message => {
        const p = document.createElement("p");
        document.querySelector("#stuff").append(message, p)})
    
    }