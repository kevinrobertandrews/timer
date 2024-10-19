export class FeatureNotImplementedError extends Error {
  constructor(feature: string) {
    super(`🤷‍♂️ ${feature}`);
    this.name = 'FeatureNotImplementedError';
    this.stack = undefined;
  }
}

export class NeedsWorkError extends Error {
  constructor(message: string) {
    super(`🛠️ ${message}`);
    this.name = 'NeedsWorkError';
    this.stack = undefined;
  }
}
