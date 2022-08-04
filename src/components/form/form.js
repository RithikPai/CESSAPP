import "./form.css";
function Form1() {
  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" className="placeholder">
          First name
        </label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" className="placeholder">
          Last name
        </label>
      </div>
      <div class="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">
          Email
        </label>
      </div>
      <button type="text" className="submit">
        Submit
      </button>
    </div>
  );
}
export default Form1;
// Notes for tommorow
// Form needs to be bigger
// add footer to complete page for app then work on schedule contact page then work on about and solutions and finish navbar css and set blog to non reactive
