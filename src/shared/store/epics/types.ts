interface EpicDependencies {
  get: (url: string) => Promise<any>;
  loadingDelayMs: number; // Amount of time (in ms) needed to trigger loading status
}

export type {EpicDependencies};
