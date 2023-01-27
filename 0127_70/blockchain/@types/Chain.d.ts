declare interface IChain {
  get getChain(): Array<IBlock>;
  lastBlock: IBlock;
  config: IConfig;
  adjustmentBlock: IBlock;
  addBlock(_data: Array<string>): IBlock | null;
}

declare interface IConfig {
  DAI: number;
  averageGenerationTime: number;
}
