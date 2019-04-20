class Video {
  constructor(name, body, url) {
    this.name = name;
    this.body = body;
    this.url = url;
  }

  submittable(assignment) {
    if (assignment.constructor.name === 'Challenge' || assignment.constructor.name === 'SystemCheck') {
      assignment.submitted = true;
      return true;
    }
    return false;
  }
}

module.exports = Video;
