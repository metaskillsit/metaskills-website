export const applyCancellationProcessingFee = (text: string, fee?: number): string =>
  fee === undefined ? text : text.replace(/900/g, String(fee));