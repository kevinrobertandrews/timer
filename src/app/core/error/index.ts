export class FeatureNotImplementedError extends Error {
  constructor(feature: string) {
    super(`🤷‍♂️ ${feature}`);
    this.name = 'FeatureNotImplementedError';
    this.stack = undefined;
  }
}
