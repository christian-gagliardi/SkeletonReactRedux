interface EpicDependencies {
  get: (url: string) => Promise<any>;
}

export type {EpicDependencies};
