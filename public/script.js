const formElement = document.forms.updateUser

if (formElement) {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    const userDetails = {
      id: formElement.id.value,
      name: formElement.name.value,
      email: formElement.email.value,
    }

    fetch(`/users/${userDetails.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails),
    })
  })
}
