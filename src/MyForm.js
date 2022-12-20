import React from 'react';

function MyForm() {
  return (
    <form>
      <label>
        Enter your message:
        <br />
        <textarea name="message" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
