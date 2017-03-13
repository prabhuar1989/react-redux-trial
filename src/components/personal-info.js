import React from "react";

const PersonalInfo = () => {
    return (
   <div className="container">
  <form>
    <div className="form-group row">
      <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-4">
        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
      </div>
    </div>
    <div className="form-group row">
      <label forName="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-4">
        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
      </div>
    </div>
    <fieldset className="form-group row">
      <legend className="col-form-legend col-sm-2">Radios</legend>
      <div className="col-sm-4">
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
            Option one is this and that&mdash;be sure to include why it's great
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
            Option two can be something else and selecting it will deselect option one
          </label>
        </div>
        <div className="form-check disabled">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
            Option three is disabled
          </label>
        </div>
      </div>
    </fieldset>
    <div className="form-group row">
      <label className="col-sm-2">Checkbox</label>
      <div className="col-sm-4">
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Check me out
          </label>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="offset-sm-2 col-sm-4">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </div>
  </form>
</div>
    );
}  

export default PersonalInfo;