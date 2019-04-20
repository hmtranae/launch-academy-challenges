class Article {
  constructor(name, body) {
    this.name = name;
    this.body = body;
  }

  submittable(assignment) {
    if (assignment.constructor.name === 'Challenge' || assignment.constructor.name === 'SystemCheck') {
      assignment.submitted = true;
      return true;
    }
    return false;
  }
}

module.exports = Article;
