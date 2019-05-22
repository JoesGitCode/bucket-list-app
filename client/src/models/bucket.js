const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Bucket = function (url) {
  this.url = url
  this.request = new RequestHelper(this.url)
}

Bucket.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:goal-submit', (event) => {
    console.log('bucket: event? ', event.target);
    console.log('Bucket subscribed to FormView:goal-submit');
    this.postGoal(event.detail)
  })
};

Bucket.prototype.postGoal = function (data) {
  this.request.post(data)
  console.log('the data? ', data);
};



module.exports = Bucket;
