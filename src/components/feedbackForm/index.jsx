function FeedbackForm() {
  let inputName = "";

  const handelInputChange = (event) => {
    inputName = event.target.value;
    console.log(inputName);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(inputName);
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>Введите имя</label>
      <input type="text" onChange={handelInputChange} />
      <input type="submit" />
    </form>
  );
}

export default FeedbackForm;
