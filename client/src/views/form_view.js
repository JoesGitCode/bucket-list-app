const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form
}

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSumbit(event)
  })
};

FormView.prototype.handleSumbit = function (event) {
  event.preventDefault()
  console.log(event.target);
  const newGoal = this.createGoal(event.target)
  PubSub.publish('FormView:goal-submit', newGoal)
  event.target.reset()
  console.log('FormView published FormView:goal-submit');
};

FormView.prototype.createGoal = function (form) {
  const newGoal = {
    goal: form.goal.value
  }
  console.log(newGoal);
};



module.exports = FormView;
