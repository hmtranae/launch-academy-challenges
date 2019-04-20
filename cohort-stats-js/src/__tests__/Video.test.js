const Video = require('../Video');
const Challenge = require('../Challenge');
const SystemCheck = require('../SystemCheck');

let video;
let challenge;
let systemCheck;

describe('Create a new Video', () => {
  beforeEach(() => {
    video = new Video('test name', 'test body', 'test url');
    challenge = new Challenge('test name', 'test body');
    systemCheck = new SystemCheck('test name', new Date());
  });

  it('defines video', () => {
    expect(video).toBeInstanceOf(Video);
  });

  it('has initialized name', () => {
    expect(video.name).toBe('test name');
  });

  it('has initialized body', () => {
    expect(video.body).toBe('test body');
  });

  it('has initialized url', () => {
    expect(video.url).toBe('test url');
  });

  it('should return true when submit assignment of class Challenge', () => {
    expect(video.submittable(challenge)).toEqual(true);
  });

  it('should return true when submit assignment of class SystemCheck', () => {
    expect(video.submittable(systemCheck)).toEqual(true);
  });

  it('should return false when submit assignment of not correct type', () => {
    expect(video.submittable(video)).toEqual(false);
  });

  it('should change challenge submitted property to true from false', () => {
    video.submittable(challenge);
    expect(challenge.submitted).toEqual(true);
  });

  it('should change systemcheck submitted property to true from false', () => {
    video.submittable(systemCheck);
    expect(systemCheck.submitted).toEqual(true);
  });
});
