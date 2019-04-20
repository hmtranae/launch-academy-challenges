const Article = require('../Article');
const Challenge = require('../Challenge');
const SystemCheck = require('../SystemCheck');

let article;
let challenge;
let systemCheck;

describe('Create a new article', () => {
  beforeEach(() => {
    article = new Article('test name', 'test body');
    challenge = new Challenge('test name', 'test body');
    systemCheck = new SystemCheck('test name', new Date());
  });

  it('defines article', () => {
    expect(article).toBeInstanceOf(Article);
  });

  it('has initialized name', () => {
    expect(article.name).toBe('test name');
  });

  it('has initialized body', () => {
    expect(article.body).toBe('test body');
  });

  it('should return true when submit assignment of class Challenge', () => {
    expect(article.submittable(challenge)).toEqual(true);
  });

  it('should return true when submit assignment of class SystemCheck', () => {
    expect(article.submittable(systemCheck)).toEqual(true);
  });

  it('should return false when submit assignment of not correct type', () => {
    expect(article.submittable(article)).toEqual(false);
  });

  it('should change challenge submitted property to true from false', () => {
    article.submittable(challenge);
    expect(challenge.submitted).toEqual(true);
  });

  it('should change systemcheck submitted property to true from false', () => {
    article.submittable(systemCheck);
    expect(systemCheck.submitted).toEqual(true);
  });
});
