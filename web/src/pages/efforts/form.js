const React = require('react')

const EffortForm = React.createClass({
  render() {
    return (
      <div>
        <h3>Effort From</h3>
        <form>
          <div>
            <label>Name</label>
            <input />
          </div>
          <div>
            <lable>Location</lable>
            <select></select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = EffortForm
